import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './UserProfile'

function App() {
  const [userId, setUserId] = useState(1)
  //Fetching new data when a prop changes
  return (
    <>
    <UserProfile userId={userId}/>
    <button onClick={()=>setUserId((prev)=>prev+1)}>Get next user details</button>
    <button onClick={()=>setUserId((prev)=>prev-1)}>Get previous user details</button>
    </>
  )
}

export default App
