import React from 'react'
import useFormInput from './custom-hooks/useFormInput'
const Example2 = () => {
  const nameInput=useFormInput()
  return (
    <div>
      <h2>Enter your name:</h2>
      <input type="text" {...nameInput} placeholder="Type here..." />
      <p>You typed: {nameInput.value}</p>
    </div>
  )
}

export default Example2
