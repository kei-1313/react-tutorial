import React, { useEffect, useState } from 'react'

const End = () => {
  useEffect(() => {
    console.log("start");
    // 依存配列を設定してなければ、コンポーネントが削除された段階で発火
    return() => {
      console.log("end");
    }
  })
  return (
    <>
      <div>
        エンド
      </div>
      
    </>
  )
}



const Effect = () => {
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState(false)
  const [isDisplay, setIsDisplay] = useState(true);

  useEffect(() => {
    console.log("call back");
    // window.setInterval(() => {
    //   setTime(prev => prev + 1);
    // }, 1000)
  }, [])

  useEffect(() => {
    if(status) {
      window.alert("アラートです");
    }

    
  }, [status])

  return (
    <div className='tutorial'>
      <h3>{time}</h3>
      <span>秒経過</span>

      <div className="check">
        <label htmlFor="check">
          <input id='check' type={"checkbox"} checked={status} onClick={() => setStatus((status) => !status)}/>
          click this
        </label>
      </div>

      {isDisplay && <End/>}
      <button onClick={() => setIsDisplay(prev => !prev)}>変更</button>
    </div>
  )
}

export default Effect