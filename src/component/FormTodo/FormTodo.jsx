import React, { useState } from 'react'
// import Form from './Form'
// import List from './List'


const FormTodo = () => {
  const tasksData = [{name: "店を予約する", completed: false}]
  const [tasks, setTasks] = useState(tasksData);
  const [val, setVal] = useState("");
  const addTask = () => {
    const newTasks = [...tasks];
    setTasks([...newTasks, {name: val, completed: false}]);
    setVal('')
  }
  const completeTask = () => {
    const newTasks = [...tasks];
    setTasks(newTasks.map(newTask => ({...newTask, completed: true})));
  }
  
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
              <button onClick={(e) => completeTask(e)}>完了</button>
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