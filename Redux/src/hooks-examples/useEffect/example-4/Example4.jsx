import { useState } from 'react'

import { useRef } from 'react'
import { useEffect } from 'react'

function Example4() {
  const [message, setMessage] = useState(["hello"])
  const lastmsgRef=useRef(null)


  const addMessage=()=>{
    setMessage([...message,`new msg at ${Date.now()}`])
  }

  //insted of direct adding msg in list it initially fade added elemenent and show it after 5ms so it look like real msg app
  useEffect(()=>{
    if(lastmsgRef.current){
      lastmsgRef.current.classList.add("fade-in")

      const timer=setTimeout(()=>{
        if(lastmsgRef.current){
          lastmsgRef.current.classList.remove("fade-in")
        }
      },500)

      return ()=>clearTimeout(timer)
    }
  },[message])

  return (
    <div className='chat-container'>
      <ul>
        {message.map((msg,i)=>{
          
          return <li key={i} ref={i==message.length-1?lastmsgRef:null}>{msg}</li>
        })}
      </ul>

      <button onClick={addMessage}>add msg</button>
    </div>
  )
}

export default Example4
