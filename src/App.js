import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0) //分割代入

  // const increment = () => setCount(count + 1)
  // const decrement = () => setCount(count - 1)

  const increment = () => setCount(previousCount => previousCount + 1)
  const decrement = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  const divide3 = () => {
    setCount(previousCount=>{
      if(previousCount % 3 === 0){
        return previousCount / 3
      } else {
        return previousCount
      }
    })
  }
  return (
    <>
      <div>
        count: {count}
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={double}>x2</button>
      <button onClick={divide3}>3の倍数の時だけ3で割る</button>
    </>
  )
}

export default App;
