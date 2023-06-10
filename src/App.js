import './App.css';
import Game from './component/Game';
import Obj from './component/Obj';
import Arry from './component/Arry';
import Count from './component/Count';
import { useState } from 'react';
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
      {flag ? <Count title="A" count={num01} countup={countUp01}/> : <Count title="B"  count={num02} countup={countUp02}/> }
      <button onClick={toggleButton}>toggle</button>
    </div>
  );
}

export default App;
