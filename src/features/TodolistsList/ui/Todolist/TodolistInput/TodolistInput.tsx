import {useAppDispatch} from '../../../../../common/hooks/useAppDispatch.ts';
import {ChangeEvent, FC, useState} from 'react';
import {TodolistDomainType} from '../../../model/todolists/todolists.reducer.ts';
import {tasksThunks} from '../../../model/tasks/tasks.reducer.ts';

type Props = {
    todolist: TodolistDomainType
}
export const TodolistInput: FC<Props> = ({todolist}) => {

    const dispatch = useAppDispatch()

    const [inputValue, setInputValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const addTaskHandler = () => {
        dispatch(tasksThunks.addTask({todolistId: todolist.id, newTaskTitle: inputValue}))
    }


    return(
        <div className="flex flex-row gap-5">
            <input
                onChange={onChangeHandler}
                type="text"
                id="createTaskInput"
                className="  w-[180px] h-[40px] bg-white rounded-lg  grid row-start-1 peer  min-h-[auto]  border-0  p-[0.32rem]  "
                placeholder="Create new Task"
            />
            <button
                onClick={addTaskHandler}
                className=" w-[40px] h-10 row-start-2 bg-green-500 border-black border-2 rounded transform active:scale-75 transition-transform">
                <img src="src/common/assets/add.svg" alt="Add"/>
            </button>

        </div>
    )
}