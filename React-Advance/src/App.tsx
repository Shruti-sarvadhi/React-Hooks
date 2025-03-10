import { useState } from 'react'
import '@/App.css'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
      <div>{count === 1 ? <p>correct</p> : <p>incorrect</p>}</div>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  )
}

export default App
