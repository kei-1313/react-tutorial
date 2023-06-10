import React, { useState } from 'react'

const Form = ({addTask}) => {
  const [value, setValue] = useState('');
  return (
    <div className='Form'>
      <input type="text"  onChange={(e) => setValue(e.target.value)}/>
      <button onClick={addTask()}>追加</button>
    </div>
  )
}

export default Form