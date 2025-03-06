import { useState } from 'react'

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function Example7() {
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

export default Example7
