import React, { useState } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0);
  return (
    <>
      <div className="tutorial">
        <h2>Timer</h2>
        <h3>{time}秒経過</h3>
      </div>
    </>
  )
}

export default Timer