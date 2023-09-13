import {createSlice} from '@reduxjs/toolkit'
import {createAppAsyncThunk} from '../../../../common/utils/create-app-async-thunk.ts';
import {DeleteTaskArg, tasksApi, UpdateTaskArg, UpdateTaskModelType} from '../../api/todolists.api.ts';
import {todolistThunks} from '../todolists/todolists.reducer.ts';
import {ResultCode} from '../../../../common/enums';

const initialState: TasksStateType = {}

const fetchTasks = createAppAsyncThunk<{
    tasks: TaskType[],
    todolistId: string
}, string>('tasks/fetchTasks', async (todolistId) => {
    const res = await tasksApi.getTasks(todolistId)
    const tasks = res.data.items
    return {tasks, todolistId}
})

const removeTask = createAppAsyncThunk<DeleteTaskArg, DeleteTaskArg>(
    'tasks/removeTask', async (arg, thunkAPI) => {

        const res = await tasksApi.deleteTask(arg);
        if (res.data.resultCode === ResultCode.Success) {
            return arg;
        } else {
            // You can handle error cases here, e.g., throw an error or return an appropriate payload.
            return thunkAPI.rejectWithValue({data: res.data, showGlobalError: true})
        }
    }
);

const addTask = createAppAsyncThunk<{ task: TaskType }, AddTaskArg>(
    'tasks/addTask', async (arg, thunkAPI) => {
        const res = await tasksApi.createTask({todolistId: arg.todolistId, newTaskTitle: arg.newTaskTitle})
        if (res.data.resultCode === ResultCode.Success) {
            return {task: res.data.data.item}
        } else {
            return thunkAPI.rejectWithValue({data: res.data, showGlobalError: true})
        }

    }
)

const updateTask = createAppAsyncThunk<UpdateTaskArg, UpdateTaskArg>(
    'tasks/updateTask', async (arg, thunkAPI) => {
        const state = thunkAPI.getState()
        const task = state.tasks[arg.todolistId].find((t) => t.id === arg.taskId)
        if (!task) {
            return thunkAPI.rejectWithValue(null)
        }
        const apiModel: UpdateTaskModelType = {
            deadline: task.deadline,
            description: task.description,
            priority: task.priority,
            startDate: task.startDate,
            title: task.title,
            status: task.status,
            ...arg.domainModel,
        }
        const  res = await tasksApi.updateTask(arg.todolistId, arg.taskId, apiModel)
        if (res.data.resultCode === ResultCode.Success) {
            return arg
        } else {
            return thunkAPI.rejectWithValue({data: res.data, showGlobalError: true})
        }

            }
)


const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state[action.payload.todolistId] = action.payload.tasks
            })
            .addCase(removeTask.fulfilled, (state, action) => {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex((t) => t.id === action.payload.taskId)
                if (index !== -1) tasks.splice(index, 1)
            })
            .addCase(addTask.fulfilled, (state, action) => {
                const tasks = state[action.payload.task.todoListId]
                tasks.unshift(action.payload.task)
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                const tasks = state[action.payload.todolistId]
                const index = tasks.findIndex((t) => t.id === action.payload.taskId)
                if (index !== -1) {
                    tasks[index] = {...tasks[index], ...action.payload.domainModel}
                }
            })
            .addCase(todolistThunks.fetchTodolists.fulfilled, (state, action) => {
                action.payload.todolists.forEach((tl) => {
                    state[tl.id] = []
                })
            })
            .addCase(todolistThunks.removeTodolist.fulfilled, (state, action) => {
                delete state[action.payload.todolistId]
            })
            .addCase(todolistThunks.addTodolist.fulfilled, (state, action) => {
                state[action.payload.todolist.id] = []
            })
    }
})

export const tasksReducer = slice.reducer
export const tasksThunks = {fetchTasks, removeTask, addTask, updateTask}


export type TasksStateType = {
    [key: string]: TaskType[]
}

export type TaskType = {
    description: string,
    title: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string,
    deadline: string,
    id: string,
    todoListId: string,
    order: number,
    addedDate: string
}


export type AddTaskArg = {
    todolistId: string,
    newTaskTitle: string
}