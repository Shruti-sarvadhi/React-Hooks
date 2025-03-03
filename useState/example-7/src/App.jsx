import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

function App() {
  const [page,setPage]=useState(1)

  const pages={
    1:<Page1/>,
    2:<Page2/>,
    3:<Page3/>
  }

  const handleNext=()=>{
    setPage(page+1)
  }

  const handlePrevious=()=>{
    setPage(page-1)
  }

  return (
    <>
    <div>
      {pages[page]}
    </div>
    <button onClick={handleNext} disabled={page===Object.keys(pages).length}>Next</button>
    <button onClick={handlePrevious} disabled={page===1}>Previous</button>
    
    
    </>
  )
}

export default App
