import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [position,setPosition]=useState({x:0,y:0})
  const [dragging,setDragging]=useState(false)


  //stop dragging
  const handleMouseUp=()=>{
    setDragging(false)
  }

  //start dragging
  const handleMouseDown=()=>{
    setDragging(true)
  }

  const handleMouseMove=(e)=>{
    if(!dragging) return;
    setPosition({
      x:e.clientX-50,
      y:e.clientY-50
    })
  }



  return (
    <>
    <div style={{width:"100vw",height:"100vh",color:"white",position:"relative"}} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
    <div
        onMouseDown={handleMouseDown}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
          color: "white",
          position: "absolute",
          top: position.y,
          left: position.x,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "grab",
          userSelect: "none"
        }}
      >
        Drag Me
      </div>
    </div>
    </>
  )
}

export default App
