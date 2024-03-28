import React from "react";
import "../styles/parallax/parallax.css";



const Parallax = () => {

    window.addEventListener('scroll', function(){
        const target = document.querySelectorAll('.scroll');
    
        let index = 0, length = target.length
        for (index; index < length; index++) {
            let pos = window.scrollY * target[index].dataset.rate;
    
            target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
        }
    });

    return (
        <div className="parallax-image scroll" data-rate="0.35"></div> 
    )
}

export default Parallax;