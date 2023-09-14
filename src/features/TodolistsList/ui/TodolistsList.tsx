import {Header} from './Header/Header.tsx';
import {TodolistBar} from './TodolistBar/TodolistBar.tsx';
import {Todolist} from './Todolist/Todolist.tsx';
import {useEffect} from 'react';
import {useAppDispatch} from '../../../common/hooks/useAppDispatch.ts';
import {todolistThunks} from '../model/todolists/todolists.reducer.ts';
import {useSelector} from 'react-redux';
import {selectTodolists} from '../model/todolists/todolists.selectors.ts';
import {selectTasks} from '../model/tasks/tasks.selectors.ts';


export const TodolistsList = () => {
    const dispatch = useAppDispatch()
    const todolists = useSelector(selectTodolists)
    const tasks = useSelector(selectTasks)


    useEffect(() => {
        dispatch(todolistThunks.fetchTodolists())
    }, []);

    return (<>
            <Header/>
            <div className="h-screen grid grid-cols-6">
                <TodolistBar/>
                <div className="grid pt-10 col-start-3 col-end-7 grid-cols-3 gap-3 grid-rows-2   bg-amber-50">
                    {todolists.map((tl) => {
                        const allTodoTasks = tasks[tl.id]
                        return (
                            <Todolist key={tl.id}  todolist={tl} tasks={allTodoTasks}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}