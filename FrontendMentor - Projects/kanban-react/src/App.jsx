import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import "./styles/style.css"
import { Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Home />
    </> 
  )
}

export default App
