import React, { useState } from 'react'

const Count = ({title}) => {
  const [num, setNum] = useState(0);
  const countUp = () => { 
    setNum(prev => prev + 1)
  }
  return (
    <div className='tutorial'>
      <div>count{title} :{num}</div>
      <button onClick={countUp}>カウント</button>
    </div>
  )
}

export default Count