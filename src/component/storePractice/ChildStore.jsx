import { useContext } from 'react'
import { MyStore } from './ParentStore'
import { useDispatch } from 'react-redux';

const ChildStore = () => {
  const [, setStoreVal] = useContext(MyStore);

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch({ type: true })
  }
  return (
    <div>
      <button onClick={clickHandler}>子をクリック</button>
    </div>
  )
}

export default ChildStore