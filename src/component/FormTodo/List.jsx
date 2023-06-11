import React from 'react'
import styled from "styled-components";

const List = ({ tasks, completeTask }) => {
  const deleteTask = (id) => { 
    completeTask(id)
  }

  const CompleteButton = styled.button`
    width: 50px;
    padding: 4px 0;
    border-radius: 4px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: white;
    margin-right: 10px;
  `
  return (
    <ul>
      {
      tasks.map(task =>
        <li key={task.id}>
          <CompleteButton onClick={() => deleteTask(task.id)}>完了</CompleteButton>
          <span>{task.name}</span>
        </li>
      )
    }
    </ul>
  )
}

export default List