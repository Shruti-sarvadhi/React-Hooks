import React, { memo } from 'react'

const Child = memo(({data}) => {
    console.log("Child component rendering...");
  return (
    <div>
      <p>{data.value}</p>
    </div>
  )
})

export default Child
