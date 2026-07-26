import './Button.css'
import PropTypes from 'prop-types'

export default function Button (props){
    return(

        <>
            <button onClick={props.btnClick} className={props.btnType} id={props.displayBtn}>{props.text}</button>
        </>

    )
}

Button.propTypes = {
    btnClick: PropTypes.func,
    btnType: PropTypes.string,
    displayBtn: PropTypes.string,
    text: PropTypes.string,
}