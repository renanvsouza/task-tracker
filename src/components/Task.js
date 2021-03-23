import { FaTimes } from 'react-icons/fa';

export function Task({ task, deleteTask, toggleReminder }) {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => toggleReminder(task.id)}>
           <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={() => deleteTask(task.id)}/></h3>
           <p>{task.day} - {task.time}</p>
        </div>
    )
}

Task.defaultProps = {
    task: 'No tasks yet.'
}