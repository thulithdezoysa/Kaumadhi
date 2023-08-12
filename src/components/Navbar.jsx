import react from 'react'
import logo from '../assets/logo.png'
import './Navbar.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'








export default function Navbar () {

    return (
        <nav className='navbar'>
            <img src={logo} className='navbar__logo' alt='Kaumadhi logo'/>
            <div className='navbar__search-bar'>
                <input type='text' placeholder='Search Collection' />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className='navbar__icons'>
                
                <FontAwesomeIcon icon={faHeart} className='navbar__icon-seperator'/> 
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <ul>
                <li>Home</li>
                <li>Collections</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>

        </nav>
    )
}