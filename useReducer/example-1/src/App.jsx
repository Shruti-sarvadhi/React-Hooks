import React from 'react'
import { useState,useReducer } from 'react'

const initstate={count:0}

const reducer=(state,action)=>{
  const {type,payload}=action
  const {count}=state
  switch(type){
    case "INCREMENT":return {...state,count:count+1}
    case "ADD":return {...state,count:count+payload.value}
    case "RESET":return {...state,count:0}
    default:return state
  }
}


const App = () => {
  const [value,setValue]=useState(0)
  const [state,dispatch]=useReducer(reducer,initstate)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
      <input type="number" value={value} onChange={(e)=>setValue(parseInt(e.target.value))} />
      <button onClick={()=>dispatch({type:"ADD",payload:{value}})} >Add</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default App
