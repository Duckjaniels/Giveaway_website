import React from 'react';
import "../../scss/Home/HomeEasySteps.scss"
import Decoration from "../../assets/Decoration.svg";
import Tshirt from "../../assets/Icon-1.svg";
import Bag from "../../assets/Icon-2.svg"
import Scope from "../../assets/Icon-3.svg"
import Circle from "../../assets/Icon-4.svg"
import {Link} from "react-router-dom";



const HomeEasySteps = () => (
    <div className="columns_section-third">
        <div className="easy_title"><h1> Wystarczą 4 proste kroki</h1>
            <div className="easy_decoration-image"> <img src ={Decoration} alt="decoration"/></div>
        </div>
        <div className="easy_content">
            <div className="easy_content-first">
                <img src={Tshirt} alt="tshirt"/>
                <p>Wibierz rzecz</p>
                <span>ubrania, zabawki,<br/> sprzęt i inne</span>
            </div>
            <div className="easy_content-second">
                <img src={Bag} alt="bag"/>
                <p>Spakuj je</p>
                <span>skorzystaj z<br/> worków na śmieci</span>
            </div>
            <div className="easy_content-third">
                <img src={Scope} alt="scope"/>
                <p>Zdecyduj komu<br/> chcesz pomóc</p>
                <span>wybierz zaufane<br/> miejsce</span>
            </div>
            <div className="easy_content-fourth">
                <img src={Circle} alt="circle"/>
                <p>Zamów kuriera</p>
                <span>kurier przyjedzie<br/> w dogodnym terminie</span>
            </div>
        </div>
        <div className="easy_button">
        <li className="header_task-give"> <Link to={"/Login"}>Oddaj<br/>rzeczy </Link></li>
        </div>
    </div>
);
export {HomeEasySteps}