import {useState} from 'react'

const Form = ({createTask}) => {
  const [val, setVal] = useState("");

  const addTask = () => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: val
    }
    setVal('')

    createTask(newTask)
  }
  return (
    <div className='Form'>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
      <button onClick={addTask}>追加</button>
    </div>
  )
}

export default Form