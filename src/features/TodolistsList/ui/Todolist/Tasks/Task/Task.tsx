import {useRef, useState} from 'react';

export const Task = () => {

    const [editable,setEditable] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('Hello')

    const inputRef = useRef(null)



    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            setInputValue(e.currentTarget.value)
            setEditable(false)
        }
    }

        return (

            <div className='flex flex-row gap-3 items-center'>
                <input type='checkbox' />
                {editable ? <input
                        ref={inputRef}
                        onChange={(e)=> setInputValue(e.target.value)}
                        onKeyDown={onKeyDownHandler}
                        value={inputValue}
                        type="text"
                        className="w-[220px] h-[30px] rounded text-xl font-medium leading-tight text-black">
                    </input> :
                    <span onDoubleClick={()=> setEditable(true)}>
                                {inputValue}
                            </span>}
                <button
                    className="w-[40px] h-10 row-start-2 bg-red-500 border-black border rounded transform active:scale-75 transition-transform">
                    <img src="src/common/assets/remove.svg" alt="Delete"/>
                </button>
            </div>
        )
    }