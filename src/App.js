import './App.css';
import Game from './component/Game';
import Obj from './component/Obj';
import Arry from './component/Arry';
import Count from './component/Count';
import { useState } from 'react';
import Arry02 from './component/Arry02';
import FormTodo from './component/FormTodo/FormTodo';
import ModalContainer from './component/Modal/ModalContainer';
import Reducer from './component/Reducer/Reducer';
import ParentContext from './component/context/ParentContext';
// import Effect from './component/effect/Effect';
import Timer from './component/effect/Timer';
import { CounterProvider } from './component/storePractice/CounterContext';
import Counter from './component/storePractice/Counter';

import { Provider } from 'react-redux';
import store from "./store"

function App() {
  const [flag, setFlag] = useState(true);

  const toggleButton = () => { 
    setFlag(prev => !prev);
  }

  const [num01, setNum01] = useState(0);
  const [num02, setNum02] = useState(0);
  const countUp01 = () => { 
    setNum01(prev => prev + 1)
  }

  const countUp02 = () => { 
    setNum02(prev => prev + 1)
  }

  return (
    <div className="App">
      <Game />

      <Obj/>

      <Arry/>

      <Arry02/>

      {flag ? <Count title="A" count={num01} countup={countUp01}/> : <Count title="B"  count={num02} countup={countUp02}/> }
      <button className='btn' onClick={toggleButton}>toggle</button>
      <FormTodo/>
      
      <ModalContainer />

      <Reducer/>

      <ParentContext />

      {/* <Effect/> */}

      <Timer/>
      <Provider store={ store }>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
