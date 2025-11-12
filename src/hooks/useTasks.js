import { useState } from 'react'

export const useTasks=()=>{
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

    return{
        tasks,
        createTask,
        deleteTask,
        updateTask
    }
}