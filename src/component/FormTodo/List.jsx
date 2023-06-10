import React from 'react'

const List = ({ tasks, completeTask }) => {
  const deleteTask = (id) => { 
    completeTask(id)
  }
  return (
    <ul>
      {
      tasks.map(task =>
        <li key={task.id}>
          <button onClick={() => deleteTask(task.id)}>完了</button>
          <span>{task.name}</span>
        </li>
      )
    }
    </ul>
  )
}

export default List