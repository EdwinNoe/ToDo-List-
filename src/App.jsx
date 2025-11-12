import { useState } from 'react'
import { Head } from './components/Head'
import { TodoList } from './components/TodoList'
import { AddTask } from './components/AddTask'
import { ProgressBar } from './components/ProgressBar'
import {Filter} from './components/Filter'

function App() {

  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFiltereStatus] = useState("all");

  const onFilter = (filter) => {
    setFiltereStatus(filter);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "completed") {
      return task.completed;
    }
    if (filterStatus === "pending"){
      return !task.completed;
    } else {
      return true; 
    }
  });

  const createTask = (taskTitle) => {
    const newTask = {
      id: Math.floor(Math.random() * 100),  
      title: taskTitle,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask=(taskId)=>{
    const updatedTasks = tasks.filter( (task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  const updateTask = (taskId, updates) => {
    const updatedTasks = tasks.map(task =>
      task.id == taskId ? { ...task, ...updates} : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className='container mx-auto '>
        <Head/>
        <div className='max-w-[35rem] mx-auto p-1'>
          <Filter onFilter={onFilter}/>
          <ProgressBar tasks={tasks}/>
          <AddTask createTask={createTask}/>
          <TodoList tasks={filteredTasks} deleteTask={deleteTask} updateTask={updateTask}/>
        </div>
      </div>
    </>
  )
}

export default App
