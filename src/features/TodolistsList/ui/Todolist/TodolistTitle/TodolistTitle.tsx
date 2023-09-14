import {FC, useRef, useState} from 'react';
import {TodolistType} from '../../../api/todolists.api.ts';
import {useAppDispatch} from '../../../../../common/hooks/useAppDispatch.ts';
import {todolistThunks} from '../../../model/todolists/todolists.reducer.ts';

type Props = {
    todolist: TodolistType
}

export const TodolistTitle: FC<Props> = ({todolist}) => {
    const dispatch = useAppDispatch()

    const [editable, setEditable] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(todolist.title)

    const inputRef = useRef(null)


    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setInputValue(e.currentTarget.value)
            dispatch(todolistThunks.updateTodolistTitle({newTitle: e.currentTarget.value, todolistId: todolist.id}))
            setEditable(false)
        }
    }

    const removeTodolistHandler = () => {
        dispatch(todolistThunks.removeTodolist(todolist.id))
    }

    return(
        <div className="flex flex-row items-center h-[50px] w-[270px] justify-evenly ">
            {editable ? <input
                    ref={inputRef}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={onKeyDownHandler}
                    value={inputValue}
                    type="text"
                    className="w-[220px] h-[30px] rounded text-xl font-medium leading-tight text-black">
                </input> :
                <span onDoubleClick={() => setEditable(true)}>
                                {inputValue}
                            </span>
            }

            <button onClick={removeTodolistHandler} className=" w-[40px] h-[40px]  hover:scale-90 active:scale-110">
                <img src={'src/common/assets/trash-can.svg'} alt="Remove"/>
            </button>
        </div>
    )
}