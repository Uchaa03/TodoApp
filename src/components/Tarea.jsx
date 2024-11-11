const Tarea = ({ todo, deleteTodo, updateTodo, editTodo}) => {
    const {id, title, description, state, priority } = todo;

    return (
        <div>
            <li className={"list-group-item"}>
                <div className={"d-flex justify-content-between align-items-start"}>
                    <div>
                        <h5 className={state ? "completada":undefined}>{title}</h5>
                        <p>{description}</p>
                        <div>
                            <button onClick={() => deleteTodo(id)} className={"btn btn-sm btn-danger mr-2"}>Eliminar</button>
                            <button onClick={() => updateTodo(id)} className={"btn btn-sm btn-warning mr-2"}>Actualizar</button>
                            <button onClick={() => editTodo(todo)} className={"btn btn-sm btn-info mr-2"}>Editar</button>
                        </div>
                    </div>
                    <span className={"badge badge-pill badge-primary"}>{priority && "Prioridad"}</span>
                </div>
            </li>
        </div>
    )
}

export default Tarea