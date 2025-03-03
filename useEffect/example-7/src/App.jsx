import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] = useState([])
  const [users,setUsers]=useState(()=>{
    const savedName=localStorage.getItem("names")
    return savedName?JSON.parse(savedName):[]
  })

  useEffect(()=>{
    localStorage.setItem("names",JSON.stringify(users))
  },[users])

  const handleAdd=()=>{
    if(name.trim()=="") return;
    setUsers([...users,name])
    setName("")
  }

  return (
    <>
    <form action="">
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </form>
    <p>saved users</p>
    <ul>
      {users.map((user,i)=>(
        <li key={i}>{user}</li>
      )
      )}
    </ul>
    </>
  )
}

export default App
