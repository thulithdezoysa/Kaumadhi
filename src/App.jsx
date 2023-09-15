
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections'
import Card from './components/Card'
import Home from './pages/Home'
import { useState } from 'react'
import Modal from './components/Modal'
import AboutUs from './pages/AboutUs'



function App() {

  const [countHeart, setCountHeart] = useState(0)
  const [countCart, setCountCart] = useState(0)

  const [cartModal, setCartModal] = useState(false)
  const [saveModal, setSaveModal] = useState(false)

  const [saveModalData, setSaveModalData] = useState()


    function saveDataForModal(item, boo){
       setSaveModalData(item.name)
    }

    function countHeartFn(boo) {

        boo ? setCountHeart(countHeart + 1) :  setCountHeart(countHeart - 1)
        
    }
    function countCartFn() {

      setCountCart(countCart + 1)
      
    }


    function showCartModal() {
        
            setCartModal((current) => !current )
            
    }
        function showSaveModal() {
        
          setSaveModal((current) => !current )
        
    }

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collections' element={<Collections clickHeart={countHeartFn} 
                                                       clickCart={countCartFn} 
                                                       saveModalData={saveDataForModal} />} /> 
      <Route path='/About' element={<AboutUs />} /> 
         
    </Routes>
    {cartModal && <Modal closeModal={showCartModal} modalTitle="Shopping Cart" />}
    {saveModal && <Modal closeModal={showSaveModal} modalTitle="Saved List" />}
    <Navbar counterHeart={countHeart} counterCart={countCart} cartModal={showCartModal} saveModal={showSaveModal}/>

    </>
  )
}

export default App