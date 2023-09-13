import { createSlice } from "@reduxjs/toolkit";
import {todolistsApi, TodolistType, UpdateTodolistTitleArg} from '../../api/todolists.api.ts';
import {createAppAsyncThunk} from '../../../../common/utils/create-app-async-thunk.ts';
import {ResultCode} from '../../../../common/enums';




const fetchTodolists = createAppAsyncThunk('todo/fetchTodolists', async () => {
    const res = await todolistsApi.getTodolists()
    return {todolists: res.data}
    })

const removeTodolist = createAppAsyncThunk<{todolistId: string}, string>(
    'todo/removeTodolist', async (todolistId, thunkApi) => {
        const res = await todolistsApi.deleteTodolist(todolistId);
        if (res.data.resultCode === ResultCode.Success) {
            return {todolistId}
        } else  {
            return thunkApi.rejectWithValue({data: res.data, showGlobalError: true})
        }
    })

const addTodolist = createAppAsyncThunk<{todolist: TodolistType}, string>(
    'todo/addTodolist', async (todolistTitle, thunkApi) => {
        const res = await todolistsApi.createTodolist(todolistTitle)
        if (res.data.resultCode === ResultCode.Success) {
            return {todolist: res.data.data.item}
        } else {
            return thunkApi.rejectWithValue({data: res.data, showGlobalError: true})

        }
    })

const updateTodolistTitle = createAppAsyncThunk<UpdateTodolistTitleArg, UpdateTodolistTitleArg>(
    'todo/updateTitle', async (arg, thunkApi) => {
        const res = await todolistsApi.updateTodolistTitle(arg)
        if (res.data.resultCode === ResultCode.Success) {
            return arg
        } else {
            return thunkApi.rejectWithValue({data: res.data, showGlobalError: true})
        }
    }
)

const initialState: TodolistDomainType[] = []

const slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodolists.fulfilled, (_, action) => {
            return action.payload.todolists.map((tl: TodolistType) => ({...tl, filter: 'all', entityStatus: 'idle'}))
        })
            .addCase(removeTodolist.fulfilled, (state, action) => {
                const index = state.findIndex((todo) => todo.id === action.payload.todolistId)
                if (index !== -1) state.splice(index,1)
            })
            .addCase(addTodolist.fulfilled, (state, action) => {
                const newTodolist: TodolistDomainType = {
                    ...action.payload.todolist,
                    filter: 'all',
                    entityStatus: 'idle'
                }
                state.unshift(newTodolist)
            })
            .addCase(updateTodolistTitle.fulfilled, (state, action) => {
                const todo = state.find((t) => t.id === action.payload.todolistId)
                if (todo) {
                    todo.title = action.payload.newTitle
                }
            })


    }
})







export const todolistsReducer = slice.reducer
export const todolistsActions = slice.actions
export const todolistThunks = {fetchTodolists, removeTodolist, addTodolist, updateTodolistTitle}


// types

export type FilterValuesType = 'all' | 'active' | 'completed'
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

export type TodolistDomainType = TodolistType & {
    filter: FilterValuesType;
    entityStatus: RequestStatusType
}