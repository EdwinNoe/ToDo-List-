import { useState } from 'react';
import LogoIcon from "../assets/Add.svg"

export function AddTask({createTask}) {


  const [value, setValue] = useState('');

  const onChange = (e) => setValue(e.target.value);
  const onAdd = () => {
    if (!value) return;
    createTask(value)
    setValue('');
  };

  return (
    <div className="flex items-center gap-2 mb-3 mt-7 ">
      <input 
        type="text"
        value={value} 
        onChange={onChange} 
        placeholder="Write your next task" 
        className="h-13 flex-1 bg-gray-800 text-gray-100 placeholder-gray-400 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={onAdd}
        className="p-2 cursor-pointer w-13 h-13 bg-[#88AB33] rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <img src={LogoIcon} />
      </button>
    </div>
  );
}
