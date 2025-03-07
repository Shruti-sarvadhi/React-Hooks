import React, { useRef } from 'react'
import FancyInput from './child/FancyInput'

const Example1 = () => {
  const fancyInputRef=useRef()
  return (
    <div>
      <FancyInput ref={fancyInputRef}/>
      <button onClick={()=>fancyInputRef.current.focus() }>Focus</button>
      <button onClick={()=>fancyInputRef.current.clear()}>Clear</button>
    </div>
  )
}

export default Example1
