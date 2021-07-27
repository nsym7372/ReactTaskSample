import { useState, useContext } from "react";
import { Context } from "../App";

export default function Creator() {
  const { tasks, setTask } = useContext(Context);
  const [name, setName] = useState("");
  const [id, setId] = useState(1);

  const submit = (e: any) => {
    e.preventDefault();

    setTask([...tasks, { id: id, title: name }]);
    setName("");
    setId(id + 1);
  };

  return (
    <form onSubmit={submit}>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input type="submit" value="add" />
    </form>
  );
}
