import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000)
  }, [])

  return (
    <div className='tutorial'>
      <h3>{time}</h3>
      <span>秒経過</span>
    </div>
  )
}

export default Effect