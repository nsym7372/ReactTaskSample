import React, { useContext } from "react";
import { Context, Tasks } from "../App";

export default function Task() {
  const t: { tasks: Tasks[]; setTask: any } = useContext(Context);
  console.log("task: ");
  console.log(t);

  const deleteTask = (id: number) => {
    const ary = t.tasks.filter((task) => {
      return task.id !== id;
    });
    t.setTask(ary);
  };

  const ret = t.tasks.map((task: Tasks) => {
    return (
      <li key={task.id}>
        # {task.id} {task.title}
        <button onClick={() => deleteTask(task.id)}>delete</button>
      </li>
    );
  });

  return <ul>{ret}</ul>;
}
