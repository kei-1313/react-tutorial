import { createContext, useState } from 'react'
import ChildStore from './ChildStore';

import { useSelector } from 'react-redux';

export const MyStore = createContext();
const ParentStore = () => {
  // const [storeVal, setStoreVal] = useState(0);
  const state = useSelector(state => state);
  return (
    <>

      <div className="tutorial">
        <h3>ParentStore</h3>
        <div>{state}</div>
        <ChildStore />
      </div>

    </>
  )
}

export default ParentStore