import { useState } from 'react'


function Example4() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
      </div>
    </>
  )
}

export default Example4
