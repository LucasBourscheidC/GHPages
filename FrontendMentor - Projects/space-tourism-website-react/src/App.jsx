import { useState, useEffect} from 'react'
import Header from './components/Header'
import "./styles/style.css"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Destination from './components/Destination'
import Technology from './components/Technology'
import Crew from './components/Crew'

function  App() {
  const [backgroundState, setBackgroundState] = useState("background-home");
  let lastBackground = backgroundState;
  useEffect(() => {
    document.body.classList.remove("background-home", 
    "background-destination", 
    "background-crew", 
    "background-technology");
    document.body.classList.add(backgroundState);
  }, [backgroundState]);
  return (
    <>
      <Header setBackgroundState={setBackgroundState} />
      <Routes>
        <Route path="/" element={<Home setBackgroundState={setBackgroundState} />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  )
}

export default App
