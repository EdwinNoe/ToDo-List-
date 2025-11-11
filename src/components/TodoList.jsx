import {TodoItem} from "./TodoItem.jsx"

export function TodoList({tasks , deleteTask, updateTask}){
    if (!tasks || tasks.length === 0) return null;
    return(
        <div className="flex flex-col gap-2">
            {tasks.map(task => (
                <TodoItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>
            ))}
        </div>
    )
}