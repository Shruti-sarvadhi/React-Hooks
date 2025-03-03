import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [data,setData]=useState(null)
  //here storeing user data from Api into state 

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setData(data))
    .catch((err)=>console.log(`Error:${err}`))
  },[])

  return (
    <>
    <ul>
    {data.map((user)=>
    <li key={user.id}>{user.name}</li>
    )}
    </ul>
    
    </>
  )
}

export default App
