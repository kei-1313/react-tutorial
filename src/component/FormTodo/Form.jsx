import {useState} from 'react'
import { useToast, Input, Button } from '@chakra-ui/react'
const Form = ({createTask}) => {
  const [val, setVal] = useState("");

  const toast = useToast();

  const addTask = () => {

    if(!val) {
      toast({
        title: "新しいタスクを入れてください",
        status: "error",
        duration: 2000,
        isClosable: true
      });
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 10000),
      name: val
    }
    setVal('')

    createTask(newTask)
  }
  return (
    <div className='Form'>
      <Input w={["200px","400px","600px","800px"]} placeholder='新しいタスクを入れてください' size='lg' type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
      <Button colorScheme='teal' size='md' onClick={addTask} ml={3}>追加</Button>
    </div>
  )
}

export default Form