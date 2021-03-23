import { useState, useEffect } from "react";
import { AddTask } from "./components/AddTask";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import Cookies from 'js-cookie';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  //Gets cookies when page loads
  useEffect(() => {
    setTasks(JSON.parse(Cookies.get('tasks')));
  }, []);

  //Save cookies when tasks are modified
  useEffect(() => {
    const cookie = JSON.stringify(tasks);
    Cookies.set('tasks', cookie, { expires: 7 });
  }, [tasks]);

  //Add task
  function addTask(task) {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setShowAddTask(false);
  }

  //Delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  //Toggle reminder
  function toggleReminder(id) {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  function showAdd() {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className="container">
      <Header title="Task Tracker" showAdd={showAdd} showAddTask={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        toggleReminder={toggleReminder} />
        : 'No tasks to show.'}
    </div>
  );
}

export default App;
