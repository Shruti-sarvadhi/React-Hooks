import React from 'react'
import { useEffect } from 'react';
import { useState,useReducer } from 'react'

const initialState={
  id:1,
  loading:false,
  data:null,
  error:null
}

const reducer=(state,action)=>{
  switch(action.type){
    case "CALL":return {...state,loading:true,error:null};
    case "SUCCESS":return {...state,loading:false,data:action.data};
    case "FAIL":return {...state,loading:false,error:action.error};
    case "NEXT":return {...state,loading:false,id:state.id+1};
    default:return state
  }
}

const Example7 = () => {
  const [state,dispatch]=useReducer(reducer,initialState)

  useEffect(()=>{
    dispatch({type:"CALL"})
    fetch(`https://jsonplaceholder.typicode.com/posts/${state.id}`)
    .then((res)=>res.json())
    .then((data)=>dispatch({type:"SUCCESS",data:data}))
    .catch((err)=>dispatch({type:"FAIL",error:err.message}))
  },[state.id])

  if(state.loading) return <div>Loading...</div>
  if(state.error) return <div>{state.error}</div>
  return (
    <div>
      <h1>{state.data?.title}</h1>
      <p>{state.id}</p>
      <button onClick={()=>dispatch({type:"NEXT"})}>next</button>
    </div>
  )
}

export default Example7
