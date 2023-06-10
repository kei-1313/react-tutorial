import React from 'react'

const List = ({ tasks, completeTask }) => {
  return (
    <ul>
      {
      tasks.map(task =>
        <li key={task.id}>
          <button onClick={() => completeTask(task.id)}>完了</button>
          <span>{task.name}</span>
        </li>
      )
    }
    </ul>
  )
}

export default List