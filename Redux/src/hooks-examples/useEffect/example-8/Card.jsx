import React from 'react'

const Card = ({name,username,email,website}) => {
  return (
    <div>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
        <a href={website}>{website}</a>
    </div>
  )
}

export default Card
