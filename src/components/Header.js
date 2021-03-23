import { Button } from './Button';

export function Header({ title, showAdd, showAddTask }) {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button showAdd={showAdd} text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? 'red' : 'green'}/>
        </header>
    )
}