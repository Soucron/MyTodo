import {TaskType} from '../../../model/tasks/tasks.reducer.ts';
import {FC} from 'react';
import {TodolistDomainType} from '../../../model/todolists/todolists.reducer.ts';
import {Task} from './Task/Task.tsx';
import {TaskStatuses} from '../../../../../common/enums';

type Props = {
    tasks: TaskType[]
    todolist: TodolistDomainType
}

export const Tasks: FC<Props> = ({tasks, todolist}) => {


        let tasksForTodolist = tasks

        if (todolist.filter === 'active') {
            tasksForTodolist = tasks.filter((t) => t.status === TaskStatuses.New)
        }

        if (todolist.filter === 'completed') {
            tasksForTodolist = tasks.filter((t) => t.status === TaskStatuses.Completed)
        }

    return(
        <>
        {  tasksForTodolist.map((t) => (
            <Task key={t.id} task={t} todolistId={todolist.id}/>
            ))}
        </>
    )
}