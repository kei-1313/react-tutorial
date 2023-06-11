import { createContext, useState } from 'react'
import Child from './Child'

export const MyContext  = createContext();
const ParentContext = () => {
  const [val, setVal] = useState(0);
  return (
    <MyContext.Provider value={[val, setVal]}>
      <div className='tutorial'>
        <div>ParentContext</div>
        <Child />
      </div>
    </MyContext.Provider>
  )
}

export default ParentContext