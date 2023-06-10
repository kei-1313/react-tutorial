import React from 'react'

const Arry02Item = ({animal}) => {
  return (
    <li>{
      // animal === "Cat"
      // ? animal + "★"
      // : animal }
      animal}{animal == "Cat" && "yes"}
    </li>
  )
}

export default Arry02Item