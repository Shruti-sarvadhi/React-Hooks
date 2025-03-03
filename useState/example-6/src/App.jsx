import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [timer,setTimer]=useState(60)
  const [isStop,setIsStop]=useState(false)

  //based on timer and isStope the time is return and timer is updated
  useEffect(()=>{
    if(isStop||timer==0) return;
    const interval=setInterval(()=>{
      setTimer((prevTime)=>prevTime-1)
    },1000)

    return ()=>clearInterval(interval)
  },[timer,isStop])

  return (
    <>
    <p>Timer:{timer}</p>
    <button onClick={()=>setIsStop(!isStop)}>{isStop?"resume":"pause"}</button>
    <button onClick={()=>setTimer(60)}>Reset</button>
    </>
  )
}

export default App
