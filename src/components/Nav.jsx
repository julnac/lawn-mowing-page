import React from "react";
import "../styles/nav/nav.css";

const Nav = () => {
    return (
        <nav id="nav">
            <div className="logo">
                <a href="#Home">Marcin Pozorski</a>
            </div>
            <ul>
                <li><a href="#Uslugi">Usługi</a></li>
                <li><a href="#Cennik">Cennik</a></li>
                <li><a href="#Kontakt">Kontakt</a></li>
            </ul>
            <a href="#Rezerwacja">
                <button className="button">
                        {/* <svg className="button__icon" viewBox="0 0 15 19" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 9.5L1.78814e-06 18.1603L1.78814e-06 0.839745L15 9.5Z"/>
                        </svg> */}
                        Rezerwacja
                </button>
            </a>
        </nav>
    )
}

export default Nav;