import {useReducer, useState} from 'react'

const Reducer = () => {
  const [val, setVal] = useState(0);
  const [rval, dispatch] = useReducer((prev, {type, step}) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです')
    }
    // if(action === "+") {
    //   return ++ prev;
    // } else if (action === "-") {
    //   return --prev;
    // }
  }, 0);

  const countUp = () => { 
    setVal(prev => ++prev)
  }

  const rcountUp = () => { 
    dispatch({type: "+", step: 10});
  }

  const rcountDown= () => { 
    dispatch({type: "-", step: 5});
  }
  return (
    <>
      <div className='tutorial'>
        <h3>{val}</h3>
        <button onClick={countUp}>増やす</button>
      </div>
      <div className='tutorial'>
        <h3>{rval}</h3>
        <div>
          <button onClick={rcountUp}>UP</button>
        </div>
        <div>
          <button onClick={rcountDown}>Down</button>
        </div>
      </div>
    </>
  )
}

export default Reducer