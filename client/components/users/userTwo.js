import React from 'react'

//react-router with parms and query
const UserTwo = ({ params: { id }, location: { query } }) => {
  let foo = query && query.foo ? 'foo' : ''
  return (
    <div>
      <h2>User tom {id} {foo}</h2>
    </div>
  )
}

export default UserTwo