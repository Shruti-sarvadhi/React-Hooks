import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const myRef=useRef();

  useEffect(()=>{
    myRef.current=count
  },[count])

  return (
    <>
    <p>Current Count:{count}</p>
    <p>Previous Count:{myRef.current}</p>
    <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
    </>
  )
}

export default App
