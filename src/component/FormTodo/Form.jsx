import React from 'react'

const Form = ({addTask, valState}) => {
  const [val, setVal] = valState;
  return (
    <div className='Form'>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
      <button onClick={addTask}>追加</button>
    </div>
  )
}

export default Form