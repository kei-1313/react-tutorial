import { useContext } from 'react'
import { MyContext } from './ParentContext';
const GrandChild = () => {
  const [val, setVal] = useContext(MyContext);
  return (
    <>
      <div>グラント</div>
      <button onClick={() => setVal(prev => prev + 1)}>孫から</button>
    </>
  )
}

export default GrandChild