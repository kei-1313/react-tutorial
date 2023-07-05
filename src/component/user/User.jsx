import React, { useEffect } from 'react'
import axios from 'axios'

function User() {
  useEffect(() => {
    const getUser = async () => {
      //axios内でparseなどを行っている
      const res = await axios.get('http://localhost:3003/user')
      console.log(res.data);
    }
    getUser();
  })
  return (
    <>
      <div className='tutorial'>
        <h1>User</h1>
      </div>
    </>
  )
}

export default User