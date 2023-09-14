import {ChangeEvent, useState} from 'react';
import {useAppDispatch} from '../../../../common/hooks/useAppDispatch.ts';
import {todolistThunks} from '../../model/todolists/todolists.reducer.ts';


export const TodolistBar = () => {

    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const addTodolistHandler = () => {
        dispatch(todolistThunks.addTodolist(inputValue))
    }


    return (
        <div className="grid grid-rows-5  bg-yellow-500">
            <div className="grid w-30 h-full justify-center items-center grid-rows-2 ">
                <input
                    onChange={onChangeHandler}
                    value={inputValue}
                    type="text"
                    id="createTodoInput"
                    defaultValue="hello"
                    className="  w-[180px] h-[40px] rounded-lg  grid row-start-1 peer  min-h-[auto]  border-0 bg-zinc-700  p-[0.32rem]  "
                    placeholder="Create new Todo"
                />
                <div className="grid row-start-2 grid-cols-2 space-x-12">
                    <button onClick={addTodolistHandler}
                        className=" w-[40px] h-10 row-start-2 bg-green-500 border-black border-2 rounded transform active:scale-75 transition-transform">
                        <img src="src/common/assets/add.svg" alt="Add"/>
                    </button>
                    <button
                        className="w-[40px] h-10 row-start-2 bg-red-500 border-black border rounded transform active:scale-75 transition-transform">
                        <img src='src/common/assets/remove.svg' alt="Delete"/>
                    </button>

                </div>
            </div>
        </div>
    )
}