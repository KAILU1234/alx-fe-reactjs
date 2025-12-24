import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (task) => {
    setTodos([...todos, task])
  }

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  )
}

export default App
