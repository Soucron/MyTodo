import {useRef, useState} from 'react';


export const TodolistTitle = () => {

    const [editable, setEditable] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('Hello')

    const inputRef = useRef(null)


    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setInputValue(e.currentTarget.value)
            setEditable(false)
        }
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

            <button className=" w-[40px] h-[40px]  hover:scale-90 active:scale-110">
                <img src={'src/common/assets/trash-can.svg'} alt="Remove"/>
            </button>
        </div>
    )
}