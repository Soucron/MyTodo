import {TodolistsList} from '../features/TodolistsList/ui/TodolistsList.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<TodolistsList/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App
