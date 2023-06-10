import React, { useState } from 'react'

const Tutorial = () => {

  const [person, setPerson] = useState({name: 'Kei', age: 24});

  const handlePerson = (e) => {
    setPerson(() => ({...person, name: e.target.value}));
  }

  const countUp = () => { 
    setPerson(() => ({...person, age: person.age + 1}));
  }

  const countDown = () => { 
    setPerson(() => ({...person, age: person.age - 1}));
  }


  return (
    <div className='tutorial'>
      <div>
        <div>Name: {person.name}</div>
        <div>age: {person.age}</div>
        <input type="text" onChange={handlePerson}/>
        <button onClick={countUp}>+</button>
        <button onClick={countDown}>-</button>
      </div>
    </div>
  )
}

export default Tutorial