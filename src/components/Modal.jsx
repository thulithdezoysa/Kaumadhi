import './Modal.css'
import Button from './Button'
import PropTypes from 'prop-types'

export default function Modal (props){
    const saveInfo = props.modalContext
    const isList = Array.isArray(saveInfo)
    const hasItem = saveInfo && typeof saveInfo === 'object' && !isList


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
                    {isList ? (
                        saveInfo.length > 0 ? (
                            <div className='modal__content--list'>
                                {saveInfo.map((item) => (
                                    <div className='modal__content--items-container' key={item.id}>
                                        <img src={item.img} alt='Item image' className='modal__content--item-img'/>
                                        <div className='modal__content--item-desc'>

                                            <h3>{item.name}</h3>
                                            <p>Available Sizes: {item.size}</p>
                                            <p>Qty: {item.qty}</p>
                                            <p>Price: <span className='bold'>LKR {item.price}</span> </p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className='modal__content--empty'>No items in the list.</p>
                        )
                    ) : hasItem ? (
                        <div className='modal__content--items-container'>

                            <img src={saveInfo.img} alt='Item image' className='modal__content--item-img'/>
                            <div className='modal__content--item-desc'>

                                <h3>{saveInfo.name}</h3>
                                <p>Available Sizes: {saveInfo.size}</p>
                                <p>Price: <span className='bold'>LKR {saveInfo.price}</span> </p>
                            </div>

                        </div>
                    ) : (
                        <p className='modal__content--empty'>{saveInfo || 'No items in the list.'}</p>
                    )}
                    <Button btnType='secondary-btn' text='Order Items'/>
                </div>

            </div>
        </>

    )
}

Modal.propTypes = {
    modalContext: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            img: PropTypes.string,
            name: PropTypes.string,
            size: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
            price: PropTypes.number,
        }),
        PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            img: PropTypes.string,
            name: PropTypes.string,
            size: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
            price: PropTypes.number,
            qty: PropTypes.number,
        })),
    ]),
    closeModal: PropTypes.func,
    modalTitle: PropTypes.string,
}