import "../styles/uslugi/uslugi.css";
import kosiarz from "../assets/kosiarz.jpg";
import { useEffect } from "react";

const Uslugi = () => {
  
    useEffect(() => {
        let isAfterTop = false;
        let isBeforeBottom = false;
        const windowHeight = window.innerHeight;


        function handleScroll() {
            const uslugiElement = document.querySelector('.uslugi');
            const uslugiElementTop = uslugiElement.getBoundingClientRect().top;
            // console.log(uslugiElementTop);
            isAfterTop = uslugiElementTop <= 0;
            isBeforeBottom = -uslugiElementTop < windowHeight;

            if (isAfterTop && isBeforeBottom) {
                const scrollElement = document.querySelector('.galeria');
                
                const posX = uslugiElementTop;
                const posY = - uslugiElementTop;
                // console.log(`pos x i y ${posX}, ${posY}`);
                // console.log(`Scroll Y: ${window.scrollY}`);
      
                scrollElement.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
            }
    
        }
        window.addEventListener('scroll', handleScroll);

        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);
    
  return (
    <section className="uslugi" id="Uslugi">
      <div className="galeria">
        <div className="box">
            <img src={kosiarz} alt="kosa"/>
            <div className="opis">
                <p>Opis</p>
            </div>
        </div>
        <div className="box">
            <img src={kosiarz} alt="kosa"/>
            <div className="opis">
                <p>Opis</p>
            </div>
        </div>
        <div className="box">
            <img src={kosiarz} alt="kosa"/>
            <div className="opis">
                <p>Opis</p>
            </div>
        </div>
        <div className="box">
            <img src={kosiarz} alt="kosa"/>
            <div className="opis">
                <p>Opis</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Uslugi;