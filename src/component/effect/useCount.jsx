import { useState, useEffect } from 'react'

export const useCount = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      let intervalId = null;
      intervalId = window.setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000)
      return () => {
        clearInterval(intervalId);
      }
    }
  }, [isRunning])


  return { time, setTime, isRunning, setIsRunning }
}

