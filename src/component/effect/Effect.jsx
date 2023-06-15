import React, { useEffect, useLayoutEffect, useState } from 'react'

const End = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log("start");

    let intervalId = null;
    
    // intervalId = window.setInterval(() => {
    //   setTime(prev => prev + 1);
    // }, 1000)
    // console.log(intervalId);
    // 依存配列を設定してなければ、コンポーネントが削除された段階で発火
    return() => {
      console.log("end");
      // window.clearInterval(intervalId)
      console.log(intervalId);
    }
  })

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  })
  return (
    <>
      <div>
        エンド
      </div>
      <div>{time}<span>秒経過</span></div>
    </>
  )
}



const Effect = () => {
  
  const [status, setStatus] = useState(false)
  const [isDisplay, setIsDisplay] = useState(true);

  useEffect(() => {
    console.log("call back");
    
  }, [])

  useEffect(() => {
    if(status) {
      window.alert("アラートです");
    }

    //依存配列に値が入っているときは、先に実行される
    return () => {
      
      console.log("updated");
    }
  }, [status])

  return (
    <div className='tutorial'>
      

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