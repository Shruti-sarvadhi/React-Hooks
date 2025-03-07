import React, { useRef, useState } from 'react'
import { useImperativeHandle } from 'react'

const FancyInput = ({ref}) => {
    const [inputValue,setInputValue]=useState("")
    const inputRef=useRef(null)

    useImperativeHandle(ref,()=>({
        focus:()=>{
            inputRef.current.focus()
        },
        clear:()=>{
            inputRef.current.value=""
        }
    }))

  return (
    <div>
      <input type="text" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)} ref={inputRef} />
    </div>
  )
}

export default FancyInput
