import { createContext, useState } from "react";
import { getAllTasks, insertTask } from "../utils/functions";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const listTaks = () => {
    getAllTasks("list-tasks", setTasks, setIsLoading);
  };

  const addTask = async (valueTask, loading) => {
    await insertTask("insert-task", valueTask, loading);
    listTaks();
  };

  return (
    <TaskContext.Provider value={{ tasks, isLoading, listTaks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
