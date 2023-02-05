import React from 'react';
import A from "../components/A";
import Menu from "../components/Menu";

const Tacge = () => {
    return (
        <div>
            <Menu/>
            <h1>Также ищут</h1>
            <div className="background-blog">
                <ul>
                    <li><A href="./" text="Спортивные секции"/></li>
                    <li><A href="./" text="Музеи"/></li>
                    <li><A href="./" text="Учебные завидения"/></li>
                </ul>
            </div>
        </div>
    );
};

export default Tacge;