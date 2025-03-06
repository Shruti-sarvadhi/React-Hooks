import { useState } from 'react'

import UserProfile from './UserProfile'

function Example5() {
  const [userId, setUserId] = useState(1)
  //Fetching new data when a prop changes
  return (
    <>
    <UserProfile userId={userId}/>
    <button onClick={()=>setUserId((prev)=>prev+1)}>Get next user details</button>
    <button onClick={()=>setUserId((prev)=>prev-1)}>Get previous user details</button>
    </>
  )
}

export default Example5
