import { useState } from 'react'

export const useFilter=(tasks)=>{
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

    return{
        filteredTasks,
        onFilter
    }

}
