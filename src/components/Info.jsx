import React from "react";
import "../styles/info/info.css";

const Info = () => {
    return (
        <div className="info-black-background" id="Cennik">
            <section className="section info" id="info">
                <div className="info__naglowek">
                    <h3>Info</h3>
                </div>
                <div className="kreska"></div>
                <p className="tytul">O nas</p>
                <p className="tresc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum labore autem ea iusto sequi sapiente optio adipisci reprehenderit, nam perferendis, inventore aliquid fuga necessitatibus quidem sed. Fugit voluptatibus eligendi pariatur.</p>
                <div className="kreska"></div>
                <p className="tytul">Cennik</p>
                <p className="tresc grid">
                    <p>Obszar</p><p>Cena</p>
                    <p>{'<'} 20m&sup2;</p><p>20 zł/m&sup2;</p>
                    <p>{'<'} 100m&sup2;</p><p>15 zł/m&sup2;</p>
                    <p>{'<'} 500m&sup2;</p><p>10 zł/m&sup2;</p>
                </p>
            </section>
        </div>
    )
}

export default Info;