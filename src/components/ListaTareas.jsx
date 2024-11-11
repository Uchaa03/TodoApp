import Tarea from "./Tarea.jsx";

let newArray = []

//Mejorable con callback visto hoy
function ordenarTareas(todos) {
    return [ //Uso de spread operator, para generar un array ordenado
        ...todos.filter(todo => todo.state === false && todo.priority === true),
        ...todos.filter(todo => todo.state === false && todo.priority === false),
        ...todos.filter(todo => todo.state === true && todo.priority === true),
        ...todos.filter(todo => todo.state === true && todo.priority === false)
    ]
}

const ListaTareas = ({ todos, deleteTodo, updateTodo }) => {


    return (
        <div>
            <h2>Lista de tareas</h2>
            <ul>
                {ordenarTareas(todos).map((todo) => (
                    <Tarea key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                ))}
            </ul>
            { todos.length === 0 && (
                <li className={"list-group-item text-center"}>No hay Tareas</li>
            )}
        </div>
    )
}

export default ListaTareas