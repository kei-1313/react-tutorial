import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if(isRunning) {
      let intervalId = null;
      intervalId = window.setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000)
      return() => {
        clearInterval(intervalId);
      } 
    } 
  }, [isRunning])

  const toggle = () => {
    setIsRunning(prev => !prev)
  }

  const reset = () => {
    setIsRunning(false)
    setTime(0)
  }

  return (
    <>
      <div className="tutorial">
        <h2>Timer</h2>
        <h3>{time}秒経過</h3>
        <button onClick={toggle}>{isRunning? '一時停止': 'スタート' }</button>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  )
}

export default Timer