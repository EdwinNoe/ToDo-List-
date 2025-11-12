import { Head } from './components/Head'
import { TodoList } from './components/TodoList'
import { AddTask } from './components/AddTask'
import { ProgressBar } from './components/ProgressBar'
import {Filter} from './components/Filter'
import { useFilter } from './hooks/useFilter'
import { useTasks } from './hooks/useTasks'

function App() {

  const { tasks, createTask, deleteTask, updateTask } = useTasks(); 
  const {filteredTasks,onFilter }= useFilter(tasks);


  return (
    <>
      <div className='container mx-auto '>
        <Head/>
        <div className='max-w-[30rem] mx-auto p-1'>
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
