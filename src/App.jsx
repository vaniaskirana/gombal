import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Gombal0 from './Gombal/Gombal0'
import Gombal1 from './Gombal/Gombal1'
import Gombal2 from './Gombal/Gombal2'
import Gombal3 from './Gombal/Gombal3'
import Gombal4 from './Gombal/Gombal4'


function App() {

  return (
   <>
    <Routes>
      <Route path="/" element={<Gombal0/>} />
      <Route path="/gombal1" element={<Gombal1/>} />
      <Route path="/gombal2" element={<Gombal2/>} />
      <Route path="/gombal3" element={<Gombal3/>} />
      <Route path="/gombal4" element={<Gombal4/>} />
    </Routes>
    
   </>
  )
}

export default App
