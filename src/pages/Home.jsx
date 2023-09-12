import { Link } from "react-router-dom";
import Button from "../components/Button";
import './Home.css'


export default function Home (){
    return(
        
        <>
            <img src="./assets/bg.png" className="background"/>
            {/* <div className="background"></div> Tried to make it responsive */}
            <img src='./assets/hero-img2.png' className='hero-img' />
            
            <section className="main-section">

                <div className="hero-text">
                    <h1>Wear Better,</h1>
                    <h1 id="look-better" >Look Better!</h1>
                    <p>new designs just in</p>
                </div>
                <div className="introduction">
                    <img src="./assets/profile-pic.jfif" className="intro__profile-pic" />
                    <p>Hi, my name is <span className="bold">Kaumadhi</span></p>
                    <p>
                        I am a fashion designer in based in Sri Lanka. I hold a degree in fashion designing from the university of
                        Northumbria, UK. The concept of my collection explores easthetics of duality through statement piece in 
                        purely white with luxury handmade beeralu laces.
                    </p>
                    <Link className="introduction__collection-btn" to='/collections'><Button btnType='primary-btn' text="Check out my Collection!" /></Link>
                    
                </div>
            </section>
            
        </>

    )
}