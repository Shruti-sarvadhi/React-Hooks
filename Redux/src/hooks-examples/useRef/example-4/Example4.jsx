import { useState } from 'react'
import { useRef } from 'react'

function Example4() {
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

export default Example4
