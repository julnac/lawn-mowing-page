import React from "react";
import "../styles/rezerwacja/rezerwacja.css";

const Rezerwacja = () => {

    function rangeSlider(currentSlider) {
        let slider = currentSlider.closest(".range-slider");
        let range = slider.querySelector(".range-slider__range");
        let value = slider.querySelector(".range-slider__value");
        
        let val = range.value;
        value.innerText = val;
        
        range.addEventListener("input", (eventArgs) => {
            value.innerText = eventArgs.target.value;
        });
    }
    
    return (
        <div className="rezerwacja-black-background" id="Rezerwacja">
            <div className="section rezerwacja" >
                <div className="rezerwacja__container">
                    <div className="rezerwacja__left"></div>
                    <div className="rezerwacja__right">
                        <div className="rezerwacja__right-title">
                            <h2>Zarezerwuj koszenie</h2>
                        </div>
                        <div className="rezerwacja__right-formularz">
                            <form action="*">
                                <label>Imię<input type="text" name="imię" maxLength="20" /></label> 
                                <label>Nazwisko<input type="text" name="nazwisko" maxLength="20" /></label> 
                                <label>Mail<input type="email" name="mail" maxLength="20" /></label>
                                <label>Adres <input type="text" name="adres" maxLength="20" /></label>
                                <label>Telefon*<input type="tel" name="phone" maxLength="20" /></label>
                                <label>Data<input type="date" name="data" maxLength="20" /></label> 
                                <label className="slider">Przybliżona wielkość trawnika [m&sup2;]
                                    <div className="range-slider">
                                        <input className="range-slider__range" onChange={(e) => rangeSlider(e.target)} type="range" defaultValue="0" min="0" max="1000" step="50"/>
                                        <span className="range-slider__value">0</span>
                                    </div>
                                </label> 
                                <label className="slider">Przybliżona wysokość trawnika [cm]
                                    <div className="range-slider">
                                        <input className="range-slider__range" onChange={(e) => rangeSlider(e.target)} type="range" defaultValue="0" min="0" max="50" step="5"/>
                                        <span className="range-slider__value">0</span>
                                    </div>
                                </label> 
                                <div className="flex">
                                    <label>Obecność psa
                                        <input type="checkbox" name="checkbox" value="wartość" />
                                    </label> 
                                </div>
                                <div className="slider">
                                    <label>Dodatkowa wiadomość*<input type="text" name="wiadomość" maxLength="20" /></label> 
                                </div>
                                <input className="submit-button button" type="submit" value="Wyślij"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rezerwacja;