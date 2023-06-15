import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(null);

  useEffect(() => {
    if(start) {
      let intervalId = null;
      intervalId = window.setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000)
      return() => {
        clearInterval(intervalId);
        setTime(0)
      } 
    } 
      
    
  }, [start])

  return (
    <>
      <div className="tutorial">
        <h2>Timer</h2>
        <h3>{time}秒経過</h3>
        <button onClick={() => setStart(true)}>スタート</button>
        <button onClick={() => setStart(false)}>リセット</button>
      </div>
    </>
  )
}

export default Timer