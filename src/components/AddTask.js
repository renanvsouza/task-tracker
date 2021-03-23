import { useState } from "react"

export function AddTask({ addTask }) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [reminder, setReminder] = useState(false);

    function handleSubmit(e) {
        //Check
        e.preventDefault();

        if(!text || !day) {
            alert('Please fill the task and date fields.')
            return;
        }

        //Call the addTask function passing the form values 
        addTask({ text, day, time, reminder });

        //Reset the state to default
        setText('');
        setDay('');
        setTime('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='date' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Time</label>
                <input type='time' value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input className='btn btn-block' type='submit' value='save task' />
        </form>
    )
}