import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import "./styles/style.css"
import { Routes } from 'react-router-dom'
import Board from './components/Board'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Sidebar />
        <Board />
    </> 
  )
}

export default App
