import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 p-4 rounded-xl mb-2 '>Learn Props</h1>
      <div className='flex flex-row gap-5'>
        <Card username="Danish" btnText="Visit Me" />
        <Card username="Alexa" btnText="Click Me" />
      </div>
    </>
  )
}

export default App
