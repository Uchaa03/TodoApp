import Swal from "sweetalert2";

const Formulario = ({ addTodo, todo , edit, editTodo, setTodo, initalValue, setEdit}) => {

  const handleSubmit = e => {
    e.preventDefault();

    const {title, description, state, priority } = todo

    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Titulo y descripción son obligatorios"
      });
    }

    edit ? //Si edita ejecuta edición si no lo agrega
        editTodo(todo):
        addTodo({
          id: Date.now(),
          title,
          description,
          state,  // Convertimos el estado a booleano
          priority
        })

    Swal.fire({
      icon: "success",
      title: "Tarea completada con éxito"
    });

    setTodo(initalValue);// Limpiar el formulario
    setEdit(false)
  };

  const handleChange = e => {
    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]:
          name === "state" ? //Si estamos en el input del select entonces acciona el check
              value === "completada": //Si no es completada se queda como pendiente
              type === "checkbox" ? checked : value
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
              value={todo.state ? "completada":"pendiente"}
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
          {edit ?
              <button type="submit" className="btn btn-primary">Editar Tarea</button> :
              <button type="submit" className="btn btn-primary">Añadir Tarea</button>}
        </form>
      </div>
  );
};

export default Formulario