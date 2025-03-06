import { useState } from 'react'
import TodoList from './Todolist'

function Example4() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList/>
    </>
  )
}

export default Example4
