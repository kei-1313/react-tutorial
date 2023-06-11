import React from 'react'
import styled from "styled-components";
import { VStack, StackDivider, HStack, IconButton, Text } from '@chakra-ui/react'
import { VscCheck} from 'react-icons/vsc';
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
        <VStack 
          divider={<StackDivider borderColor='gray.200' />}
          borderColor="black.100"
          borderWidth="1px"
          borderRadius="3px"
          alignItems="start"
          mx="auto"
          p={3}
          w={["300px","500px","700px","900px"]}
        >
        {
        tasks.map(task =>
          <HStack key={task.id}>
            <IconButton onClick={() => deleteTask(task.id)} icon={<VscCheck/>}>完了</IconButton>
            <Text>{task.name}</Text>
          </HStack>
        )
      }
      </VStack>
    </ul>
  )
}

export default List