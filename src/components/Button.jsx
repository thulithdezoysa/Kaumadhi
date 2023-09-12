import './Button.css'

export default function Button (props){
    return(
        
        <>
            <button onClick={props.btnClick} className={props.btnType} id={props.displayBtn}>{props.text}</button>
        </>

    )
}