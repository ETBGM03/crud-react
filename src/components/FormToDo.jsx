import React, { useState } from "react";
import { CreateToDo } from "./CreateToDo";
import "./../css/FormToDo.css";
import { uid } from "../utils/Uid";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const FormToDo = () => {
  const [listaTareas, setListaTareas] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError(true);
      return;
    }
    setError(false);
    const newTodo = {
      id: uid(),
      text: input,
      completed: false,
    };
    setListaTareas([...listaTareas, newTodo]);
    setInput("");
  };

  return (
    <div className="containerForm">
      <form className="formToDo" onSubmit={handleSubmit}>
        <label className="formToDo--label" htmlFor="addToDo">
          Crear una Tarea
        </label>
        <span>
          {error ? (
            <span className="formToDo--span">El campo está vacío</span>
          ) : null}
        </span>
        <input
          onChange={(e) => handleInput(e)}
          value={input}
          className="formToDo--input"
          type="text"
          id="addToDo"
          placeholder="Nombre de Tarea"
        />
        <CreateToDo />
      </form>

      <div className="listToDos">
        {listaTareas.length === 0 && <p>No hay tareas</p>}
        <TodoList>
          {listaTareas.map(({ id, text, completed }) => (
            <TodoItem
              key={id}
              id={id}
              text={text}
              listaTareas={listaTareas}
              setListaTareas={setListaTareas}
            />
          ))}
        </TodoList>
      </div>
    </div>
  );
};

export { FormToDo };
