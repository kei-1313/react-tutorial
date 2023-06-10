import React, { useState } from 'react'
// import Form from './Form'
// import List from './List'
const FormTodo = () => {
  const tasksData = [{id: 1, name: "店を予約する"}]
  const [tasks, setTasks] = useState(tasksData);
  const [val, setVal] = useState("");
  const addTask = () => {
    const newTasks = [...tasks];
    setTasks([...newTasks, {id: Math.floor(Math.random() * 10000),name: val}]);
    setVal('')
  }
  const completeTask = (id) => {
    const newTasks = [...tasks];
    setTasks(newTasks.filter(newTask => {
      return newTask.id !== id
    }));
  }
  console.log(tasks);
  return (
    <div>
      <div className='tutorial'>
        <h2 className="Reminder">Reminder</h2>
        {/* <List tasksState={ [tasks, setTasks] }/>
        <Form addTask={addTask}/> */}
        <ul>
          {
          tasks.map(task =>
            <li key={task.name}>
              <button onClick={() => completeTask(task.id)}>完了</button>
              <span>{task.name}</span>
            </li>
          )
        }
        </ul>
        <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
        <button onClick={addTask}>追加</button>
      </div>
    </div>
  )
}

export default FormTodo