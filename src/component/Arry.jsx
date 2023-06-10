import {useState} from 'react'

const Arry = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);

  const changeNum = () => { 
    const newNums = [...nums]
    const value = newNums.pop();
    newNums.unshift(value);
    setNums(newNums);
  }

  return (
    <div className='tutorial'>
      <div>{nums}</div>
      <button onClick={changeNum}>クリック</button>
    </div>
  )
}

export default Arry