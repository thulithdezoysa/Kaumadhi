import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import { Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections'
import Home from './pages/Home'



function App() {

  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collections' element={<Collections />} /> 
      <Route path='/About' element={<App />} /> 
      <Route path='/Contact' element={<App />} />   
    </Routes>
    <Navbar />

    </>
  )
}

export default App