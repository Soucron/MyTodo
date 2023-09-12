import {Header} from './Header/Header.tsx';
import {TodolistBar} from './TodolistBar/TodolistBar.tsx';
import {Todolist} from './Todolist/Todolist.tsx';

export const TodolistsList = () => {
    return (<>
            <Header/>
            <div className="h-screen grid grid-cols-6">
                <TodolistBar/>
                <div className="grid pt-10 col-start-3 col-end-7 grid-cols-3 gap-3 grid-rows-2   bg-amber-50">
                    <Todolist/>
                    <Todolist/>
                    <Todolist/>
                    <Todolist/>
                    <Todolist/>
                    <Todolist/>
                </div>
            </div>
        </>
    )
}