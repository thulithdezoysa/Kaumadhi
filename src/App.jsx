
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections'
import Home from './pages/Home'
import { useState } from 'react'



function App() {

  const [countHeart, setCountHeart] = useState(0)
  const [countCart, setCountCart] = useState(0)

  function countHeartFn() {

    setCountHeart(countHeart + 1)
    
}
function countCartFn() {

  setCountCart(countCart + 1)
  
}

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collections' element={<Collections clickHeart={countHeartFn} clickCart={countCartFn}/>} /> 
      <Route path='/About' element={<App />} /> 
      <Route path='/Contact' element={<App />} />   
    </Routes>
    <Navbar counterHeart={countHeart} counterCart={countCart}/>

    </>
  )
}

export default App