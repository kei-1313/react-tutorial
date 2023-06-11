import {useContext} from 'react'
import { MyContext } from './ParentContext'
import GrandChild from './GrandChild'

const Child = () => {
  const [val,] = useContext(MyContext);
  return (
    <>
    <div>Child: {val}</div>
    <GrandChild />
    </>
  )
}

export default Child