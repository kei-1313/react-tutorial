import React, { useState } from 'react'
import Form from './Form'
import List from './List'
const FormTodo = () => {
  const tasksData = [{id: 1, name: "宿題をする"},{id: 2, name: "ジムに行く"},{id: 3, name: "買い物に行く"}]
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
  return (
    <div>
      <div className='tutorial'>
        <h2 className="Reminder">Reminder</h2>
        <List tasks={tasks} completeTask={completeTask}/>
        <Form addTask={addTask} valState={[val, setVal]}/>
      </div>
    </div>
  )
}

export default FormTodo