import { useState } from "react";
import DeleteIcon from "../assets/Delete.svg";
import EditIcon from "../assets/Edit.svg";

export function TodoItem({ Completed=true, title="Some Task"}) {

  const [completed, setCompleted] = useState(Completed);

  const completeTask = () => setCompleted(!completed);

  return (
    <div className=" my-3 border border-[#B9AB93] flex justify-between items-center p-4 w-full">
      
      <div className="flex justify-center items-center">
        <button
            onClick={completeTask}
            className={`
            w-7 h-7 rounded-full border-2 cursor-pointer
            ${ completed ? "bg-[#22C55E] border-[#22C55E]" : "bg-black border-[#1C9D4C]"}
            `}
        >
        </button>

        <span className={`ml-3 ${Completed ? 'line-through' : ''}`}>
          {title}
        </span>

      </div>
  
      <div className="flex gap-3">
        <button className="cursor-pointer">
          <img className="w-5" src={DeleteIcon} />
        </button>

        <button className="cursor-pointer">
          <img className="w-5" src={EditIcon} />
        </button>
      </div>
    </div>
  );
}