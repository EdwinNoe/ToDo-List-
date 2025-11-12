import { useState } from "react";
import DeleteIcon from "../assets/Delete.svg";
import EditIcon from "../assets/Edit.svg";
import Check from "../assets/Check.svg"

export function TodoItem({task , deleteTask, updateTask}) {

  const [completed, setCompleted] = useState(task.completed);
  const [isEditing, setIsEditing] = useState(false); 
  const [newTitle, setNewTitle] = useState(task.title);

  const completeTask = () => {
    updateTask(task.id, { completed: !task.completed });
    setCompleted(!completed)
  };

  const onEdit = () => {
    if (isEditing) {
      updateTask(task.id, { title: newTitle }); 
    }
    setIsEditing(!isEditing); 
  };

  return (
    <div className="transform my-1 border border-[#B9AB93] flex justify-between items-center p-4 w-full">
      
      <div className="flex justify-center items-center">
        <button
            onClick={completeTask}
            className={`
            w-7 h-7 rounded-full border-2 cursor-pointer
            transition-colors duration-600 ease-in-out
            ${ completed ? "bg-[#22C55E] border-[#22C55E]" : "bg-black border-[#1C9D4C]"}
            `}
        >
        </button>
        {isEditing ? (
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="ml-3 p-1 border rounded"
          />
        ) : (
          <span className={`ml-3 ${completed ? "line-through" : ""}`}>
            {task.title}
          </span>
        )}

      </div>
  
      <div className="flex gap-3">
        <button className="cursor-pointer" onClick={()=>deleteTask(task.id)}>
              <img className="w-5" src={DeleteIcon} />
        </button>

        <button className="cursor-pointer" onClick={()=>onEdit()}>
          {
            isEditing?(
              <img className="w-5" src={Check} />
            )
            : <img className="w-5" src={EditIcon}  /> 
          }
        </button>
      </div>
    </div>
  );
}