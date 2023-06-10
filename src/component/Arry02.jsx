import React, { useState } from 'react'
import Arry02List from './Arry02List';
import Arry02Input from './Arry02Input';

const animals = ["Dog", "Cat", "Rot"];
const Arry02 = () => {
  const [fileterVal, setFilterVal] = useState("");
  // const newAnimals = animals.map((animal) => <li key={animal}>hello, {animal}</li>)

  //検索欄の文字列でフィルターをかける
  const fileredAnimals = animals.filter(animal => animal.indexOf(fileterVal) !== -1)
  return (
    <div className='tutorial'>
      <Arry02Input filterState={[fileterVal, setFilterVal]}/>
      <Arry02List animals={fileredAnimals}/>
    </div>
  )
}

export default Arry02