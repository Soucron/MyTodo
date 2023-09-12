import {Header} from '../common/components/Header/Header.tsx';
import { TodolistBar } from '../common/components/TodolistBar/TodolistBar.tsx';
import {Todolist} from '../features/TodolistsList/Todolist/Todolist.tsx';


function App() {




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
    </>)
}

export default App
