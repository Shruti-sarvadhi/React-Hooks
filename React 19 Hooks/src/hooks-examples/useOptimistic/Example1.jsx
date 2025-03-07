import React from 'react'
import { useState,useOptimistic } from 'react'

const Example1 = () => {
  const [todos,setTodos]=useState([])
  const [optimisticTodos,setOptimisticTodos]=useOptimistic(todos,(oldTodo,newTodo)=>[...oldTodo,{text:newTodo,pending:true}])

  const handleAddTodo=async(formData)=>{
    const newTodo=formData.get("todo")
    setOptimisticTodos(newTodo)
    await new Promise((resolve)=>setTimeout(resolve,1000))
    

    setTodos((currentTosos)=>[
      ...currentTosos,
      {text:newTodo,pending:false}
    ])

  }

  return (
    <div>
      <form action={handleAddTodo}>
        <input type="text" name="todo" id="todo" placeholder='add todo' />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
      {optimisticTodos?.map((todo,index)=>(
        <li key={index}>
          {todo.text}
          {todo.pending&&<span>(Adding...)</span>}
        </li>
      ))}
      </ul>
      
    </div>
  )
}

export default Example1
