import { useState } from "react";
import "./../css/TodoItem.css";

const TodoItem = ({ id, text, listaTareas, setListaTareas }) => {
  const [completado, setCompletado] = useState(false);
  console.log(completado);
  const handleComplete = () => {
    const tarea = listaTareas.find((el) => el.id === id);
    tarea.completed = !tarea.completed;
    setCompletado(!completado);
    setListaTareas([...listaTareas]);
  };
  return (
    <li
      className={`${completado ? "complete" : null}`}
      onClick={handleComplete}
    >
      {text}
    </li>
  );
};

export { TodoItem };
