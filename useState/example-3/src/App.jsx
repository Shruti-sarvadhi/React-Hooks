import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  //based on toggle theme could be set

  return (
    <>
    <div style={{background:isDarkMode?"black":"white",color:isDarkMode?"white":"black"}}>
    <p>{isDarkMode?"Dark Mode":"Light Mode"}</p>
    <button onClick={()=>setIsDarkMode(!isDarkMode)}>{isDarkMode?"🌙":"☀️"}</button>
    </div>
    
    </>
  )
}

export default App
