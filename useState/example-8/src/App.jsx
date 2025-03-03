import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [query,setQuery]=useState("")

  const users=[
    "Alice Johnson",
    "Bob Williams",
    "Charlie Brown",
    "David Smith",
    "Eve Adams"
  ]

  const filtername=users.filter((user)=>user.toLowerCase().includes(query.toLowerCase()))
  

  return (
    <>
      <div>
        <input type="text" name='search' value={query} placeholder='search user here' onChange={(e)=>setQuery(e.target.value)} />
        
        {query&&<ul>
          {
            filtername.length>0?
            (filtername.map((user,index)=>
              <li key={index}>{user}</li>
            ))
            :
            (<li>No user found</li>)
            
          }
        </ul>}
      </div>
    </>
  )
}

export default App
