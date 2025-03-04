import React from 'react'
import { useRef } from 'react'

const App = () => {
  const nameRef=useRef()
  const emailRef=useRef()

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log({
      name:nameRef.current.value,
      email:emailRef.current.value
    });
    
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">name</label>
        <input type="text" ref={nameRef}  />
        <label htmlFor="">email</label>
        <input type="email" ref={emailRef} />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App
