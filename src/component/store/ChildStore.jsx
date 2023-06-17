import { useContext } from 'react'
import { MyStore } from './ParentStore'

const ChildStore = () => {
  const [, setStoreVal] = useContext(MyStore);

  return (
    <div>
      <button onClick={() => setStoreVal(prev => prev + 10)}>子をクリック</button>
    </div>
  )
}

export default ChildStore