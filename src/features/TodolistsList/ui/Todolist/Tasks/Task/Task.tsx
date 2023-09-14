import {ChangeEvent, FC, useState} from 'react';
import {tasksThunks, TaskType} from '../../../../model/tasks/tasks.reducer.ts';
import {useAppDispatch} from '../../../../../../common/hooks/useAppDispatch.ts';
import {TaskStatuses} from '../../../../../../common/enums';


type Props =  {
    todolistId: string,
    task: TaskType
}

export const Task: FC<Props> = ({task, todolistId}) => {

    const dispatch = useAppDispatch()

    const [editable,setEditable] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>(task.title)



    const removeTaskHandler = () => {
        dispatch(tasksThunks.removeTask({todolistId,taskId: task.id}))
    }

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            dispatch(tasksThunks.updateTask({todolistId, taskId: task.id, domainModel: {title: inputValue}  }))
            setEditable(false)
        }
    }

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const status = e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New
        dispatch(tasksThunks.updateTask({todolistId, taskId: task.id, domainModel: {status}}))
    }

        return (

            <div className='flex flex-row gap-3 items-center'>
                <input
                    type='checkbox'
                    checked={task.status === TaskStatuses.Completed}
                    onChange={changeStatusHandler}

                />
                {editable ? <input
                        onChange={(e)=> setInputValue(e.target.value)}
                        onKeyDown={onKeyDownHandler}
                        value={inputValue}
                        type="text"
                        className="w-[220px] h-[30px] rounded text-xl font-medium leading-tight text-black">
                    </input> :
                    <span onDoubleClick={()=> setEditable(true)}>
                                {inputValue}
                            </span>}
                <button onClick={removeTaskHandler}
                    className="w-[40px] h-10 row-start-2 bg-red-500 border-black border rounded transform active:scale-75 transition-transform">
                    <img src="src/common/assets/remove.svg" alt="Delete"/>
                </button>
            </div>
        )
    }