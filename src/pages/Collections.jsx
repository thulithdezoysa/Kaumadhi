import Card from "../components/Card";
import './Collections.css'
import { useState } from 'react'


export default function Collections (props){

    
    return(
        
        <div className="collections">
            <img src='./assets/Collections-fg.png' alt="collection foreground" className="collections__foreground-img" />
            <img src='./assets/collections-bg.png' alt="collection background" className="collections__background-img" />
            <Card clickCart={props.clickCart} clickHeart={props.clickHeart} /> 
        </div>

    )
}