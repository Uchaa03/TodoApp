import React, { useState } from 'react';
import Swal from "sweetalert2";

const Formulario = ({ addTodo }) => {

  const initialValue = {
    title: "Tarea 1",
    description: "Descripcion 1",
    state: "completada",  // Es mejor mantenerlo como string para el select
    priority: false
  };

  const [todo, setTodo] = useState(initialValue);

  const handleSubmit = e => {
    e.preventDefault();

    const {id, title, description, state, priority } = todo;

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Titulo y descripción son obligatorios"
      });
    }

    addTodo({
      id: Date.now(),
      title,
      description,
      state: state === "completada",  // Convertimos el estado a booleano
      priority
    });

    Swal.fire({
      icon: "success",
      title: "Tarea completada con éxito"
    });

    setTodo(initialValue);  // Limpiar el formulario
  };

  const handleChange = e => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              name="title"
              placeholder="Introduce la tarea"
              className="form-control mb-2"
              value={todo.title}
              onChange={handleChange}
          />
          <textarea
              name="description"
              placeholder="Introduce la descripcion"
              className="form-control mb-2"
              value={todo.description}
              onChange={handleChange}
          />
          <select
              name="state"
              className="form-control mb-2"
              value={todo.state}
              onChange={handleChange}
          >
            <option value="pendiente">Pendiente</option>
            <option value="completada">Completada</option>
          </select>
          <div className="form-check mb-2">
            <input
                className="form-check-input"
                type="checkbox"
                name="priority"
                id="inputCheck"
                checked={todo.priority}
                onChange={handleChange}
            />
            <label
                className="form-check-label"
                htmlFor="inputCheck"
            >
              Prioridad
            </label>
          </div>
          <button
              type="submit"
              className="btn btn-primary"
          >
            Añadir
          </button>
        </form>
      </div>
  );
};

export default Formulario