import {useState} from 'react'
import Board from './Board';
const Game = () => {
  //oxの切り替えを行うためのフラグの状態を保持
  const [xIsNext, setXIsNext] = useState(true);

  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState(0);

  //最後の状態の配列を取得
  const currentSquares = history[currentMove];
 

  const handlePlay = (nextSquares) => { 
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }


  //過去の記録に飛ぶ
  const jumpTo = (nextMove) => { 
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    
    //ゲームが最初でないとき
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }


    return (
      <li className='game-item' key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
 

  return (
    <div className="game">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <div className="game-info">
        <ul className='game-list'>{moves}</ul>
      </div>
    </div>
  )
}

export default Game