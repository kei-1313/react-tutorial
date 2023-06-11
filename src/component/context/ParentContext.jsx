import { createContext } from 'react'
import Child from './Child'

export const MyContext  = createContext('hello');
const ParentContext = () => {
  return (
    <div className='tutorial'>
      <div>ParentContext</div>
      <Child />
    </div>
  )
}

export default ParentContext