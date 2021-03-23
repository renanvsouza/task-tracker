import { Task } from './Task';

export function Tasks({ tasks, deleteTask, toggleReminder }) {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
            ))}
        </>
    )
}