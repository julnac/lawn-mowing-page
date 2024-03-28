import React from "react";
import "../styles/hero.css";
import video from '../assets/lawn-movie.webm';

const Hero = () => {
    return (
        <section className="section hero" id="Home">
            <div className="hero__giph">
                <video playsInline loop muted autoPlay>
                    <source src={video} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="hero__info">
                <h1>Eksperci w<br/>pielęgnacji <br/><span> Zieleni</span></h1>
                
                <p>Precyzyjne koszenie trawników<br/>
                    <span><a href="#">zielony.zakatek@gmail.com</a></span>
                </p>
                
            </div>
        </section>
    )
}

export default Hero;