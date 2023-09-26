import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from './Button'
import Modal from './Modal.jsx'

export default function Navbar (props) {

    const [menuToggle, setMenuToggle] = useState(false)

   
        function closeMenuItems(){
            setMenuToggle(() => false)
        }

        function toggleMenuItems(){
            setMenuToggle((current) => !current)
        }

        function searchItems(){
            alert('This function is not available at the moment')
        }
    
    return (
        <nav className='navbar'>

            <Link to="/"><img src='./assets/logo.png' className='navbar__logo' alt='Kaumadhi logo'/></Link> 
            <div className='navbar__search-bar'>
                <input type='search' placeholder='Search Collection' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='navbar__search-icon' onClick={searchItems} />
            </div>
            <div className='navbar__icons'>
                <div className='navbar__icon--counter heart-counter'>{props.counterHeart}</div>
                <div className='navbar__icon--counter cart-counter'>{props.counterCart}</div>
                <FontAwesomeIcon icon={faHeart} className='navbar__icon-seperator' onClick={props.saveModal}/> 
                <FontAwesomeIcon icon={faCartShopping}  onClick={props.cartModal} className='navbar__cart-icon'/>
            </div>
            <FontAwesomeIcon icon={faBars} className='navbar__menu-icon' onClick={toggleMenuItems} />

            <ul className={menuToggle ? 'navbar__navlinks navbar__navlinks-show' : 'navbar__navlinks navbar__navlinks-hide'} >
                <FontAwesomeIcon icon={faXmark} className='navbar__closeBtn' onClick={closeMenuItems} />
                <div className='navbar__search-bar navbar__responsive-search-bar'>
                    <input type='search' placeholder='Search Collection' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='navbar__search-icon' onClick={searchItems} />
                </div>
                <li onClick={closeMenuItems}>
                    <Link to="/" >Home</Link>
                </li>
                <li onClick={closeMenuItems}>
                    <Link to="/collections" >Collections</Link>
                </li>
                <li onClick={closeMenuItems}>
                    <Link to="/about" >About us</Link>
                </li>
                
            </ul>

        </nav>
    )
}