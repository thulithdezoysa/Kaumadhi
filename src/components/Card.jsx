import './Card.css';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { collectionArray } from '../collectionArray.jsx'

export default function Card(props) {

  const [isSaved, setIsSaved] = useState(collectionArray.map(() => false));

  const searchTerm = (props.searchTerm || '').trim().toLowerCase()
  const filteredItems = searchTerm
    ? collectionArray.filter((item) => item.name.toLowerCase().includes(searchTerm))
    : collectionArray

  function toggleSave(item) {
    const updatedIsSaved = [...isSaved]
    updatedIsSaved[item.id] = !updatedIsSaved[item.id]
    props.clickHeart(updatedIsSaved[item.id])
    props.saveModalData(item, updatedIsSaved[item.id])
    setIsSaved(updatedIsSaved)
  }

  return (
    <div className="card-container">
      {filteredItems.length === 0 ? (
        <p className="card-container__empty">No items match your search.</p>
      ) : (
        filteredItems.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} className="card__img" />
            <h2>{item.name}</h2>
            <div className="card__size-wrapper">
              <p>
                Available in: <span className="card__size">{item.size}</span>
              </p>
              <FontAwesomeIcon
                onClick={() => toggleSave(item)}
                icon={faHeart}
                data-heart={item.id}
                className={`card__heart-icon`}
                id={isSaved[item.id] ? 'card__heart-fill' : ''}
              />
            </div>
            <div className="card__price-wrapper">
              <p>Price:</p>
              <h3>Rs {item.price}</h3>
            </div>

            <Button
              btnClick={() => props.clickCart(item)}
              data-cart={item.id}
              btnType="primary-btn"
              text="Add to cart"
            />
          </div>
        ))
      )}
    </div>
  )
}

Card.propTypes = {
  clickHeart: PropTypes.func,
  clickCart: PropTypes.func,
  saveModalData: PropTypes.func,
  searchTerm: PropTypes.string,
}



















// import './Card.css'
// import { collectionArray } from '../collectionArray.jsx'
// import Button from './Button'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-regular-svg-icons'
// import { useState } from 'react'


// export default function Card (props){

//     const [isSave, setIsSave] = useState(collectionArray.map(() => false))
//     // const [isLiked, setIsLiked] = useState(isLiked)

    
//     function toggleSave(index){
//         const targetItem = collectionArray.filter(() => dress.id == index)

//         const updatedIsSave = [...isSave]
//         updatedIsSave[index] = !updatedIsSave[index]
//         setIsSave(updatedIsSave)
        
//     }
//     const save = isSave ? "card__heart-fill":  ""

//     function heartEventHandler(event, targetItemId ){

//         props.clickHeart()

//         const targetItem = collectionArray.filter((dress) => dress.id == targetItemId)[0]




//         // console.log(targetItem.isLiked)

//         toggleSave(targetItem)

//         if (targetItemId == event.target.dataset.heart){
            

            
//         }
//     }
   
//     return(
        
//         <div className='card-container'>
//             {collectionArray.map((item) => (
//                 <div className='card' key={item.id}>
//                     <img src={item.img} className='card__img' />
//                     <h2>{item.name}</h2>
//                     <div className='card__size-wrapper'>
//                         <p>Available in: <span className='card__size'>{item.size}</span> </p> 
//                         <FontAwesomeIcon 
//                                         onClick={(e) => {heartEventHandler(e, item.id)}} 
//                                         icon={faHeart} 
//                                         data-heart={item.id} 
//                                         className="card__heart-icon" 
//                                         id={save} />
                     
//                     </div>
//                     <div className='card__price-wrapper'>
//                         <p>Price: </p>
//                         <h3>Rs {item.price}</h3>
//                     </div>
                    

//                     <Button 
//                             btnClick={props.clickCart} 
//                             data-cart={item.id} 
//                             btnType="primary-btn" 
//                             text="Add to cart"/>                   
//                 </div>
//             ))}
//         </div>

//     )
// }