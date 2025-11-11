import { useState } from 'react'
import { Head } from './components/Head'
import { TodoList } from './components/TodoList'
import { AddTask } from './components/AddTask'
import { ProgressBar } from './components/ProgressBar'

function App() {

    const [tasks, setTasks] = useState([]); 

    const createTask = (taskTitle) => {
      const newTask = {
        id: tasks.length,  
        title: taskTitle,
        completed: false
      };
      setTasks([...tasks, newTask]);
    };

  return (
    <>
      <div className='container mx-auto '>
        <Head/>
        <div className='max-w-[35rem] mx-auto p-1'>
          <ProgressBar/>
          <AddTask createTask={createTask}/>
          <TodoList tasks={tasks}/>
        </div>
      </div>
    </>
  )
}

export default App
