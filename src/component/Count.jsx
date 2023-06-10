import React, { useState } from 'react'

const Count = ({title, count, countup}) => {
  
  return (
    <div className='tutorial'>
      <div>count{title} :{count}</div>
      <button onClick={countup}>カウント</button>
    </div>
  )
}

export default Count