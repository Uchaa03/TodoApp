import Tarea from "./Tarea.jsx";

let newArray = []

//Mejorable con callback visto hoy
function ordenarTareas(todos) {
    return [ //Uso de spread operator, para generar un array ordenado
        ...todos.filter(todo => !todo.state && todo.priority === true), //Si no es completada
        ...todos.filter(todo => !todo.state && todo.priority === false),
        ...todos.filter(todo => todo.state && todo.priority === true), //Si es completada
        ...todos.filter(todo => todo.state && todo.priority === false)
    ]
}

const ListaTareas = ({ todos, deleteTodo, updateTodo, editTodo}) => {


    return (
        <div>
            <h2>Lista de tareas</h2>
            <ul>
                {ordenarTareas(todos).map((todo) => (
                    <Tarea key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
                ))}
            </ul>
            { todos.length === 0 && (
                <li className={"list-group-item text-center"}>No hay Tareas</li>
            )}
        </div>
    )
}

export default ListaTareas