import { useState } from 'react'

import { useRef } from 'react'
import { useEffect } from 'react'

function Example2() {
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

export default Example2
