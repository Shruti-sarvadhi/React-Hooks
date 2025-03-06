import { useState } from 'react'
import { useEffect } from 'react'

function Example2() {
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
    <p>🕛{timer}</p>
    <button onClick={()=>setIsStop(!isStop)}>{isStop?"resume":"pause"}</button>
    <button onClick={()=>setTimer(60)}>Reset</button>
    </>
  )
}

export default Example2
