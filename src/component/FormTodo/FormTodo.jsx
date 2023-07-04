import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import { ChakraProvider } from '@chakra-ui/react'
const FormTodo = () => {
  const tasksData = [{ id: 1, name: "宿題をする" }, { id: 2, name: "ジムに行く" }, { id: 3, name: "買い物に行く" }]
  const [tasks, setTasks] = useState(tasksData);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  }
  const completeTask = (id) => {
    const newTasks = [...tasks];
    setTasks(newTasks.filter(newTask => {
      return newTask.id !== id
    }));
  }

  return (
    <>
      <ChakraProvider>
        <div className='tutorial'>
          <h2 className="Reminder">Reminder</h2>
          <List tasks={tasks} completeTask={completeTask} />
          <Form createTask={createTask} />
        </div>
      </ChakraProvider>
    </>
  )
}

export default FormTodo