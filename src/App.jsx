import { useState } from 'react'
import { Head } from './components/Head'
import { TodoList } from './components/TodoList'
import { AddTask } from './components/AddTask'
import { ProgressBar } from './components/ProgressBar'

function App() {

    const [tasks, setTasks] = useState([]); 
    
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
          <ProgressBar tasks={tasks}/>
          <AddTask createTask={createTask}/>
          <TodoList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
        </div>
      </div>
    </>
  )
}

export default App
