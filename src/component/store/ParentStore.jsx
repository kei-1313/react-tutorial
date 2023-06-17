import { createContext, useState } from 'react'
import ChildStore from './ChildStore';
export const MyStore = createContext();
const ParentStore = () => {
  const [storeVal, setStoreVal] = useState(0);

  return (
    <>
      <MyStore.Provider value={[storeVal, setStoreVal]}>
        <div className="tutorial">
          <h3>ParentStore</h3>
          <div>{storeVal}</div>
          <ChildStore />
        </div>
      </MyStore.Provider>
    </>
  )
}

export default ParentStore