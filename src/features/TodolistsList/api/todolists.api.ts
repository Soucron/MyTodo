import {instance} from '../../../common/api';
import {TaskPriorities, TaskStatuses} from '../../../common/enums';
import {AddTaskArg} from '../model/tasks/tasks.reducer.ts';


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
    updateTodolistTitle(arg: UpdateTodolistTitleArg) {
        return instance.put<BaseResponseType>(`todo-lists/${arg.todolistId}`, {title: arg.newTitle})
    }

}

export const  tasksApi = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(arg: AddTaskArg) {
        return instance.post<BaseResponseType<{item: TaskType}>>(`todo-lists/${arg.todolistId}/tasks`, {title:arg.newTaskTitle})
    },
    deleteTask(arg: DeleteTaskArg) {
        return instance.delete<BaseResponseType>(`todo-lists/${arg.todolistId}/tasks/${arg.taskId}`)
    },
    updateTask(todolistId: string, taskId: string, taskModel: UpdateTaskModelType) {
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




type BaseResponseType<D = object> = {
    resultCode: number,
    messages: string[],
    data: D,
    fieldErrors: {
        error: string,
        field: string
    }
}

export type TodolistType = {
    id: string,
    addedDate: string,
    order: number,
    title: string
}

type GetTasksResponseType = {
    error: string | null,
    totalCount: number,
    items: TaskType[]

}

export type DeleteTaskArg = {
    todolistId : string,
    taskId : string
}

export type UpdateTodolistTitleArg = {
    todolistId: string,
    newTitle: string
}

export type UpdateTaskModelType = {
    title: string;
    description: string;
    status: TaskStatuses;
    priority: TaskPriorities;
    startDate: string;
    deadline: string;
};


export type UpdateTaskArg = {
    taskId: string;
    domainModel: UpdateDomainTaskModelType;
    todolistId: string;
};

export type UpdateDomainTaskModelType = {
    title?: string;
    description?: string;
    status?: TaskStatuses;
    priority?: TaskPriorities;
    startDate?: string;
    deadline?: string;
};




