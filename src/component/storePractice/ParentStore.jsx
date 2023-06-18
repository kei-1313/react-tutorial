import { createContext, useState } from 'react'




export const MyStore = createContext();
const ParentStore = () => {
  // const [storeVal, setStoreVal] = useState(0);
  return (
    <>

      <div className="tutorial">
        <h3>ParentStore</h3>
        <div></div>
      </div>

    </>
  )
}

export default ParentStore