import './Card.css'
import { collectionArray } from '../collectionArray.js'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export default function Card (){
    let targetObj = collectionArray.map((items) => items)
    
    let targetItem = targetObj.map((item) => item)
   
    console.log(targetItem)

    return(
        
        <div className='card-container'>
            {collectionArray.map((item) => (
                <div className='card'>
                    <img src={item.img} className='card__img' />
                    <h2>{item.name}</h2>
                    <div className='card__size-wrapper'>
                        <p>Available in: <span className='card__size'>{item.size}</span> </p> 
                        <FontAwesomeIcon icon={faHeart} className='card__heart-icon'/>
                    </div>
                    <div className='card__price-wrapper'>
                        <p>Price: </p>
                        <h3>Rs {item.price}</h3>
                    </div>
                    

                    <Button btnType="primary-btn" text="Add to cart"/>
                    

                    
                </div>
            ))}
        </div>

    )
}