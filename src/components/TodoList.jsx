import {TodoItem} from "./TodoItem.jsx"

export function TodoList(){
    return(
        <div className="flex justify-center flex-col">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
        
    )
    
}