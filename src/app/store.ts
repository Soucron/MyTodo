import { configureStore } from "@reduxjs/toolkit";
import {todolistsReducer} from '../features/TodolistsList/model/todolists/todolists.reducer.ts';
import {tasksReducer} from '../features/TodolistsList/model/tasks/tasks.reducer.ts';


export const store = configureStore({
    reducer: {
     todolists: todolistsReducer,
        tasks: tasksReducer
    }
})

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch



