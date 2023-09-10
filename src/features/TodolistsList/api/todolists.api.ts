import {instance} from '../../../common/api';


export const todolistsApi = {
    getTodolists() {
        return instance.get<TodolistType[]>('todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<BaseResponseType<{item: TodolistType}>>('todo-lists', {title: title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<BaseResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolistTitle(todolistId: string, newTodolistTitle: string) {
        return instance.put<BaseResponseType>(`todo-lists/${todolistId}`, {newTodolistTitle: newTodolistTitle})
    }

}

export const  tasksApi = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, newTaskTitle: string) {
        return instance.post<BaseResponseType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks`, {newTaskTitle:newTaskTitle})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<BaseResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string, taskId: string, taskModel: UpdateTaskModel) {
        return instance.put<BaseResponseType<{item: TaskType}>>(`todo-lists/${todolistId}/tasks/${taskId}`, taskModel)
    }
}

type TaskType = {
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

type UpdateTaskModel = {
    title: string,
    description: string,
    completed: boolean,
    status: number,
    priority: number,
    startDate: string,
    deadline: string
}


type BaseResponseType<D = object> = {
    resultCode: number,
    messages: string[],
    data: D,
    fieldErrors: {
        error: string,
        field: string
    }
}

type TodolistType = {
    id: string,
    addedDate: string,
    order: number,
    title: string
}

type GetTasksResponseType = {
    error: string | null,
    totalCount: number,
    item: TaskType[]

}




