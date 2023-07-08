import React, { useEffect, useState } from 'react'
import axios from 'axios'

function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUser = async () => {
      //axios内でparseなどを行っている
      const res = await axios.get('http://localhost:3003/user')

      setUsers(res.data);
      // console.log(res.data);
    }
    getUser();
  }, [])
  return (
    <>
      <div className='tutorial'>
        {users.map(user => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <p>age : {user.age}</p>
              <p>{user.address.street}</p>
              <p>{user.interests.join(',')}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default User