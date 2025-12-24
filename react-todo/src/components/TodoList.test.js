import { render, screen } from '@testing-library/react'
import TodoList from '../components/TodoList'

test('renders todo items', () => {
  const todos = ['Learn React', 'Write Tests']
  render(<TodoList todos={todos} onDelete={() => {}} />)

  expect(screen.getByText('Learn React')).toBeInTheDocument()
  expect(screen.getByText('Write Tests')).toBeInTheDocument()
})
