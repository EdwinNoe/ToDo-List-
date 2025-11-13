import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

export const useTasks = () => {
  const [tasks, setTasks] = useState(getLocalStorage());

  const createTask = (taskTitle) => {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      title: taskTitle,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setLocalStorage([...tasks, newTask])
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setLocalStorage(updatedTasks)
  }

  const updateTask = (taskId, updates) => {
    const updatedTasks = tasks.map(task =>
        task.id == taskId ? { ...task, ...updates } : task
    );
    setTasks(updatedTasks);
    setLocalStorage(updatedTasks)
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask
  }
}