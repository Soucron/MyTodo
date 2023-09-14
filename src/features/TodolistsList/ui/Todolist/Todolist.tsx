
import {TodolistButtons} from './TodolistButtons/TodolistButtons.tsx';
import {TodolistInput} from './TodolistInput/TodolistInput.tsx';
import {TodolistTitle} from './TodolistTitle/TodolistTitle.tsx';
import {FC, useEffect} from 'react';
import {useAppDispatch} from '../../../../common/hooks/useAppDispatch.ts';
import {tasksThunks, TaskType} from '../../model/tasks/tasks.reducer.ts';
import {TodolistDomainType} from '../../model/todolists/todolists.reducer.ts';
import {Tasks} from './Tasks/Tasks.tsx';

type Props = {
    todolist: TodolistDomainType,
    tasks: TaskType[]
}

export const Todolist: FC<Props> = ({todolist, tasks}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(tasksThunks.fetchTasks(todolist.id))
    }, []);


    return (
        <div
            className="grid rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <TodolistTitle todolist={todolist}/>
            <TodolistInput todolist={todolist}/>
            <Tasks tasks={tasks} todolist={todolist}/>
            <TodolistButtons/>
        </div>

    )

}