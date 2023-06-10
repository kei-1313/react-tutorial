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
  return (
    <div className="App">
      <Game />
      <Obj/>
      <Arry/>
      {flag ? <Count title="A"/> : <Count title="B"/> }
      <button onClick={toggleButton}>toggle</button>
    </div>
  );
}

export default App;
