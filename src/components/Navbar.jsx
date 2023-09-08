import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

export default function Navbar (props) {

    return (
        <nav className='navbar'>
            <Link to="/"><img src='./assets/logo.png' className='navbar__logo' alt='Kaumadhi logo'/></Link> 
            <div className='navbar__search-bar'>
                <input type='search' placeholder='Search Collection' />
                <FontAwesomeIcon icon={faMagnifyingGlass} className='navbar__search-icon' />
            </div>
            <div className='navbar__icons'>
                <div className='navbar__icon--counter heart-counter'>{props.counterHeart}</div>
                <div className='navbar__icon--counter cart-counter'>{props.counterCart}</div>
                <FontAwesomeIcon icon={faHeart} className='navbar__icon-seperator'/> 
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/collections">Collections</Link>
                </li>
                <li>
                    <Link to="/about-us">About us</Link>
                </li>
                
            </ul>

        </nav>
    )
}