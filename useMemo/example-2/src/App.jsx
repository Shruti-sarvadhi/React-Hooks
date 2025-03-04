import React from 'react'
import { useState } from 'react'
import List from './List';
import { useMemo } from 'react';

const App = () => {
  const [query,setQuery]=useState("")
  const data = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

  //The filtering only happens when query or data changes, not on every render.
  //The List component will only update when the filtered results change.
  const filteredItems=useMemo(()=>{
    return data.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
  },[query,data])

  return (
    <div>
      <input type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />
      <List items={filteredItems}/>
    </div>
  )
}

export default App
