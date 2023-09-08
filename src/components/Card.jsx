import './Card.css'
import { collectionArray } from '../collectionArray.js'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'


export default function Card (props){

    const [isSave, setIsSave] = useState(false)

    console.log('issave' +isSave)
    function saveHeart(x){
        setIsSave(!x)
        
    }
    const save = isSave ? "card__heart-fill":  ""

    function heartEventHandler(event, targetItemId ){

        props.clickHeart()

        const targetItem = collectionArray.filter((dress) => dress.id == targetItemId)[0]
// -------------Last Stop isliked---------------------------------------



        // console.log(targetItem.isLiked)

        // saveHeart(targetItem.isLiked)

        if (targetItemId == event.target.dataset.heart){
            

            
        }
    }
   
    return(
        
        <div className='card-container'>
            {collectionArray.map((item) => (
                <div className='card' key={item.id}>
                    <img src={item.img} className='card__img' />
                    <h2>{item.name}</h2>
                    <div className='card__size-wrapper'>
                        <p>Available in: <span className='card__size'>{item.size}</span> </p> 
                        <FontAwesomeIcon 
                                        onClick={(e) => {heartEventHandler(e, item.id)}} 
                                        icon={faHeart} 
                                        data-heart={item.id} 
                                        className="card__heart-icon" 
                                        id={save} />
                     
                    </div>
                    <div className='card__price-wrapper'>
                        <p>Price: </p>
                        <h3>Rs {item.price}</h3>
                    </div>
                    

                    <Button 
                            btnClick={props.clickCart} 
                            data-cart={item.id} 
                            btnType="primary-btn" 
                            text="Add to cart"/>
                    

                    
                </div>
            ))}
        </div>

    )
}