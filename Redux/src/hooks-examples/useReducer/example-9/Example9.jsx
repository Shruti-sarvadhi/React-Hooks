import React, { useReducer } from 'react';
import { useState } from 'react';

const initialState = { 
  past:[],
  present:[],
  future:[]
 };

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return {
        past:[...state.past,state.present],//save current state in past
        present:[...state.present,action.payload],//update present
        future:[] };
    case 'undo':
      if (state.past.length === 0) return state;
      return {
        past:state.past.slice(0,-1),//remove last state from past
        present:state.past[state.past.length - 1],//get last state from past
        future:[state.present, ...state.future]};//add current state to future
    case 'redo':
      if (state.future.length === 0) return state;
      return {
        past: [...state.past, state.present],//save current state in past
        present: state.future[0],//save future in present
        future: state.future.slice(1),//remove next state from future
      };
    default:
      throw new Error();
  }
}

function Example9() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input,setInput]=useState("")

  const handleAdd=()=>{
    if (input.trim()) {
      dispatch({ type: 'add', payload: input });
      setInput('');
    }
  }
 

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add an item"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={() => dispatch({ type: 'undo' })} disabled={state.past.length === 0}>
        Undo
      </button>
      <button onClick={() => dispatch({ type: 'redo' })} disabled={state.future.length === 0}>
        Redo
      </button>
      <ul>
        {state.present.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default Example9;