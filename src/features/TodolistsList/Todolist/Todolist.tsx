import {Task} from './Task/Task.tsx';
import {TodolistButtons} from '../../../common/components/Todolist/TodolistButtons/TodolistButtons.tsx';
import {TodolistInput} from '../../../common/components/Todolist/TodolistInput/TodolistInput.tsx';
import {TodolistTitle} from '../../../common/components/Todolist/TodolistTitle/TodolistTitle.tsx';


export const Todolist = () => {




    return (
        <div
            className="grid rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <TodolistTitle/>
            <TodolistInput/>
            <Task/>
            <Task/>
            <Task/>
            <TodolistButtons/>
        </div>

    )

}