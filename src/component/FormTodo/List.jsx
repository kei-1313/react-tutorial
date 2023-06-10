import React from 'react'

const List = ({ tasksState }) => {
  const [tasks, setTasks] = tasksState;
  return (
    <ul>
      {
        tasks.map(task =>
          <li key={task.name}>
            <button>完了</button>
            <span>{task.name}</span>
          </li>
        ) 
      }
    </ul>
  )
}

export default List