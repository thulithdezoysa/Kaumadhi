import './Modal.css'
import { collectionArray } from '../collectionArray.jsx'
import Button from './Button'
import { useState } from 'react'

export default function Modal (props){
    const [saveItems, setSaveItems] = useState()

    const saveInfo = props.modalContext

    
    return(
        
        <>    

            <div className="modal">

            
                <div className="modal__content">
                    <Button className="modal__content--close" 
                    btnClick={props.closeModal} 
                    btnType='close-btn'
                    text='Back'/>
                    <h1>{props.modalTitle}</h1>
                    <hr />
                    <div className='modal__content--items-container'>

                        <img src={saveInfo.img} alt='Item image' className='modal__content--item-img'/>
                        <div className='modal__content--item-desc'>

                            <h3>{saveInfo.name}</h3>
                            <p>Available Sizes: {saveInfo.size}</p>
                            <p>Price: <span className='bold'>LKR {saveInfo.price}</span> </p>
                        </div>

                    </div>
                    <Button btnType='secondary-btn' text='Order Items'/>
                </div>

            </div>
        </>

    )
}