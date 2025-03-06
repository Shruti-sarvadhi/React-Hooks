import { useState } from 'react'


function Example10() {
  const [disabled,setDisabled]=useState(false)


  //it prevent user to submit multiple times 
  //button is disabled after first click and after 3 sec user can submit again if request fails
  const handleClick=()=>{
    setDisabled(true)
    setInterval(()=>{
      setDisabled(false)
    },3000)

  }

  return (
    <>
    <button onClick={handleClick} disabled={disabled}>{disabled?"please wait":"submit"}</button>
    </>
  )
}

export default Example10
