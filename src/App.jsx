import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'

function App() {
  const [state, setstate] = useState(true)
  return (
    <>
    <button onClick={(e)=>setstate(!state)}>Toogle</button>
    {state?<Hero/>:""}
    </>
  )
}

export default App
