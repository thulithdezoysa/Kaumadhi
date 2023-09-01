import { Link } from "react-router-dom";
import Button from "../components/Button";
import './Home.css'
import Collections from "./Collections";

export default function Home (){
    return(
        
        <>
            <img src="./src/assets/bg.png" className="background"/>
            <img src='./src/assets/hero-img2.png' className='hero-img' />
            
            <section className="main-section">

                <div className="hero-text">
                    <h1>Wear Better,</h1>
                    <h1 id="look-better" >Look Better!</h1>
                    <p>new designs just in</p>
                </div>
                <div className="introduction">
                    <img src="./src/assets/profile-pic.jfif" className="intro__profile-pic" />
                    <p>Hi, my name is <span className="bold">Kaumadhi</span></p>
                    <p>
                        I am a fashion designer in NYC. Raised in Flint, Michigan,
                        I then moved to Chicago where she focused on fine and applied arts.
                        My passion for style, sewing, and costuming is what she's determined to keep doing.
                    </p>
                    <Link className="introduction__collection-btn" to='/collections'><Button btnType='primary-btn' text="Check out my Collection" /></Link>
                    
                </div>
            </section>
            
        </>

    )
}