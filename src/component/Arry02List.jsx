import React from 'react'
import Arry02Item from './Arry02Item';
const Arry02List = ({ animals }) => {
  return (
    <ul>
      {animals
        .map((animal) => {
          return (
            <Arry02Item animal={animal} key={animal} />
          );
        })
      }
    </ul>
  )
}
export default Arry02List