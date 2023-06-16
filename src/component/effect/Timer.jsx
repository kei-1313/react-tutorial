import React from 'react'
import { useCount } from './useCount'
const Timer = () => {
  const { time, setTime, isRunning, setIsRunning } = useCount();
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
        <button onClick={toggle}>{isRunning ? '一時停止' : 'スタート'}</button>
        <button onClick={reset}>リセット</button>
      </div>
    </>
  )
}

export default Timer