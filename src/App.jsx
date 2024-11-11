import React, {useEffect, useState} from 'react'
import Formulario from './components/Formulario'
import ListaTareas from "./components/ListaTareas.jsx";

const initialStatTodos = JSON.parse(localStorage.getItem("todos")) || []

const App = () => {

    const [todos, setTodos] = useState(initialStatTodos)

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

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
        <Formulario addTodo={addTodo}/>
        <ListaTareas
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTdoo}
        />
      </div>
  )
}

export default App