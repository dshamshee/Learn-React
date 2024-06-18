import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCounter] = useState(0)

  const addValue = () => {
    // count = count +1
    if (count < 20) {

      // setCounter(count + 1)


      setCounter((prevCounter) => prevCounter + 1)  // the callBack function return a previous <counter> value, and here we get that previous value and update it by 1
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)



    } else alert('you do not add more value')
  }

  const removeValue = () => {
    if (count > 0) {

      setCounter(count - 1)
    } else alert('You do not remove more value')
  }

  // let count = 0

  return (
    <>
      <h1>React Counter</h1>
      <h2>Counter {count}</h2>
      <button onClick={addValue}>Add Value {count}</button>
      <br /><br />
      <button onClick={removeValue}>Remove Value {count}</button>
    </>
  )
}

export default App
