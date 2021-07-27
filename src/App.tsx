import "./styles.css";
import Task from "./components/Task";
import Creator from "./components/Creator";
import React, { createContext, useState } from "react";

//tasks
export type Tasks = {
  id: number;
  title: string;
};

//next id
// const [count, setCount] = useState(0);
export const Context = createContext(
  {} as {
    tasks: Tasks[];
    setTask: React.Dispatch<React.SetStateAction<Tasks>>;
  }
);

export default function App() {
  // const [nextId, setNext] = useState(0);

  const [tasks, setTask] = useState<Tasks[]>([]);

  const value = {
    tasks,
    setTask
  };

  return (
    <div className="App">
      <h1>アプリ</h1>
      <Context.Provider value={value}>
        <Creator />
        <Task />
      </Context.Provider>
    </div>
  );
}
