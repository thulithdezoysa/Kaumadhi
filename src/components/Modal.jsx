import './Modal.css'
import { collectionArray } from '../collectionArray.jsx'
import Button from './Button'

export default function Modal (props){

    function showModalContext(){
        console.log(props.modalData)
    }
    

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
                    <div>{showModalContext}</div>
                    <Button btnType='secondary-btn' text='Order Items'/>
                </div>

            </div>
        </>

    )
}