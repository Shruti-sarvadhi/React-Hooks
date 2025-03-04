import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const TextRef=useRef("")

  const handleCopy=()=>{
    if(TextRef.current){
      navigator.clipboard.writeText(TextRef.current.value)
      alert("text copied to clipboard")
    }
  }

  return (
    <>
    <input type="text" ref={TextRef} defaultValue="copy me" />
    <button onClick={handleCopy}>Copy</button>
    </>
  )
}

export default App
