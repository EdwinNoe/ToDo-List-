import { Head } from './components/Head'
import { TodoList } from './components/TodoList'
import { AddTask } from './components/AddTask'
import { ProgressBar } from './components/ProgressBar'

function App() {
  return (
    <>
      <div className='container mx-auto '>
        <Head/>
        <div className='max-w-[35rem] mx-auto p-1'>
          <ProgressBar/>
          <AddTask/>
          <TodoList/>
        </div>
      </div>
    </>
  )
}

export default App
