import { useState } from 'react'
import Home from './components/Home'
import "./styles/style.css"
import { Routes } from 'react-router-dom'
import {DndProvider} from "react-dnd"
import {HTML5Backend} from "react-dnd-html5-backend"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Home />
      </DndProvider>
    </> 
  )
}

export default App
