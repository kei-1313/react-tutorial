import { useContext } from 'react'
import { MyContext } from './ParentContext';
const GrandChild = () => {
  const value = useContext(MyContext);
  return (
    <div>{value}</div>
  )
}

export default GrandChild