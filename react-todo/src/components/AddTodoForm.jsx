import { useState } from 'react'

function AddTodoForm({ onAdd }) {
  const [task, setTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(task)
    setTask('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm
