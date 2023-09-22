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

        function toggleMenuitems(){
            setMenuToggle(() => !menuToggle)
            menuToggle ? 'inherit' : 'none'
            alert('clicked')

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
            <FontAwesomeIcon icon={faBars} className='navbar__menu-icon' onClick={toggleMenuitems} />

            <ul className='navbar__navlinks' style={{display:menuToggle}}>
            <FontAwesomeIcon icon={faXmark} className='navbar__closeBtn' onClick={toggleMenuitems} />
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/collections">Collections</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                
            </ul>

        </nav>
    )
}