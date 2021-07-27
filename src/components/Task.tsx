import React, { useContext } from "react";
import { Context, Tasks } from "../App";

export default function Task() {
  const t: { tasks: Tasks[]; setTask: any } = useContext(Context);
  console.log("task: ");
  console.log(t);
  const ret = t.tasks.map((task: Tasks) => {
    return (
      <li key={task.id}>
        # {task.id} {task.title}
      </li>
    );
  });

  return <ul>{ret}</ul>;
}
