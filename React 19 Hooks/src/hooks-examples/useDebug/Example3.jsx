import React from 'react'
import useFetchData from './custom-hooks/useFetchData'

const Example3 = () => {
  const { data, loading } = useFetchData("https://jsonplaceholder.typicode.com/posts/3");
  return (
    <div>
      {loading ? <h2>Loading...</h2> : <h2>{data?.title}</h2>}
    </div>
  )
}

export default Example3
