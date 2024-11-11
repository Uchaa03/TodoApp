import React, {useEffect, useState} from 'react'
import Formulario from './components/Formulario'
import ListaTareas from "./components/ListaTareas.jsx";

const initialStatTodos = JSON.parse(localStorage.getItem("todos")) || []

const App = () => {

    const initialValue = {
        title: "Tarea 1",
        description: "Descripcion 1",
        state: false,  // Lo ponemos como booleano
        priority: false
    };

    const [todos, setTodos] = useState(initialStatTodos)
    const [todo, setTodo] = useState(initialValue);
    const [edit, setEdit] = useState(false)

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const editTodo = (editTodo) => {
        setTodo(editTodo)
        setEdit( true)
        setTodos(todos //Recorro las tareas y modifico solo la tarea que coincida en id el resto se quedan igual
            .map(todo => todo.id === editTodo.id ?
                editTodo:
                todo))
    }

    const deleteTodo = id => {
        const newArray = todos.filter(todo => todo.id !== id)
        setTodos(newArray)
    }

    const updateTdoo = id => {
        const newArray = todos.map(todo=> {
            if (todo.id === id) {
                todo.state = !todo.state //Para cambiar el booleano
            }
            return todo
        })
        setTodos(newArray)
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    return (
    <div className='container mb-2'>
        <h1 className='my-4'>Formulario</h1>
        <Formulario
            setTodo={setTodo}
            initalValue={initialValue}
            addTodo={addTodo}
            editTodo={editTodo}
            todo={todo}
            setEdit={setEdit}
            edit={edit}
        />
        <ListaTareas
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTdoo}
            editTodo={editTodo}
            todo={todo}
        />
      </div>
  )
}

export default App