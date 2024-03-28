import React from "react";
import "../styles/kontakt/kontakt.css";

const Kontakt = () => {
    return (
        <section className="section kontakt" id="Kontakt">
            <div className="kontakt__content">
                <h1>Twój trawnik potrzebuje koszenia?</h1>
                <h3>Umówmy się</h3>
                <p><a href="zielony.zakatek@gmail.com">zielony.zakatek@gmail.com</a></p>
            </div>
            <div className="kreska"></div>
            <footer>
                <p>Info o firmie</p>
                <p>Polityka</p>
                <p>Sociale</p>
            </footer>
        </section>
)
}

export default Kontakt;