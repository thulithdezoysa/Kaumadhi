
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Collections from './pages/Collections'
import Home from './pages/Home'
import { useState } from 'react'
import Modal from './components/Modal'
import AboutUs from './pages/AboutUs'



function App() {

  const [countHeart, setCountHeart] = useState(0)
  const [cartItems, setCartItems] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const [cartModal, setCartModal] = useState(false)
  const [saveModal, setSaveModal] = useState(false)

  const [saveModalData, setSaveModalData] = useState('No items in the list.')

    function saveDataForModal(item){
       setSaveModalData(item)
    }

    function countHeartFn(boo) {

        boo ? setCountHeart(countHeart + 1) :  setCountHeart(countHeart - 1)

    }
    function addToCart(item) {

      setCartItems((current) => {
        const existingItem = current.find((cartItem) => cartItem.id === item.id)

        if (existingItem) {
          return current.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
          )
        }

        return [...current, { ...item, qty: 1 }]
      })

    }


    function toggleCartModal() {
        
            setCartModal((current) => !current )
            
    }
        function toggleSaveModal() {

          setSaveModal((current) => !current )
    }

  const cartCount = cartItems.reduce((total, item) => total + item.qty, 0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/collections' element={<Collections clickHeart={countHeartFn}
                                                       clickCart={addToCart}
                                                       saveModalData={saveDataForModal}
                                                       searchTerm={searchTerm} />} />
      <Route path='/About' element={<AboutUs />} />

    </Routes>
    {cartModal && <Modal closeModal={toggleCartModal} modalTitle="Shopping Cart" modalContext={cartItems} />}
    {saveModal && <Modal closeModal={toggleSaveModal} modalTitle="Saved List" modalContext={saveModalData} />}
    <Navbar counterHeart={countHeart} counterCart={cartCount} cartModal={toggleCartModal} saveModal={toggleSaveModal} searchTerm={searchTerm} onSearchChange={setSearchTerm}/>

    </>
  )
}

export default App