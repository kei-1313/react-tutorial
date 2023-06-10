import React from 'react'

const Arry02Input = ({filterState}) => {
  const [filterVal, setFilterVal] = filterState;
  return (
    <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)}/>
  )
}

export default Arry02Input