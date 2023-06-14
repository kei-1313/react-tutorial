import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false)

  useEffect(() => {
    console.log("call back");
    // window.setInterval(() => {
    //   setTime(prev => prev + 1);
    // }, 1000)
  }, [])

  useEffect(() => {
    if(status) {
      window.alert("アラートです");
    }
  }, [status])

  return (
    <div className='tutorial'>
      <h3>{time}</h3>
      <span>秒経過</span>

      <div className="check">
        <label htmlFor="check">
          <input id='check' type={"checkbox"} checked={status} onClick={() => setStatus((status) => !status)}/>
          click this
        </label>
      </div>
    </div>
  )
}

export default Effect