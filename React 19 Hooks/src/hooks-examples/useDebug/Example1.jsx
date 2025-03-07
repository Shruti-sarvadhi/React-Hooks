import React from 'react'
import useExpensiveCalculation from './custom-hooks/useExpensiveCalculation'
const Example1 = () => {
  const {value,setValue}=useExpensiveCalculation(10)
  return (
    <div>
      <h2>Value: {value}</h2>
      <button onClick={() => setValue(value + 1)}>Increase</button>
    </div>
  )
}

export default Example1
