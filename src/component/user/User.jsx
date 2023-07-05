import React, { useEffect, useState } from 'react'
import axios from 'axios'

function User() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUser = async () => {
      //axios内でparseなどを行っている
      const res = await axios.get('http://localhost:3003/user')

      setUsers(res.data);
      console.log(res.data);
    }
    getUser();
  }, [])
  return (
    <>
      <div className='tutorial'>
        <h1>User</h1>
      </div>
    </>
  )
}

export default User