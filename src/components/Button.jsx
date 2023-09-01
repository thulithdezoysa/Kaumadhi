import './Button.css'

export default function Button (props){
    return(
        
        <>
            <button className={props.btnType}>{props.text}</button>
        </>

    )
}