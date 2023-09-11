import './Modal.css'
import { collectionArray } from '../collectionArray.jsx'
import Button from './Button'

export default function Modal (props){
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
                    <p>No items in your cart. {props.modalContext}</p>
                    <Button btnType='secondary-btn' text='Order Items'/>
                </div>

            </div>
        </>

    )
}