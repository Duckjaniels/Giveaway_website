import React from 'react';
import {Link} from "react-router-dom";
import {Login} from "./Login";
import {Register} from "./Register";


const HomeHeader = () => (
    <div className="header">
    <div className="header_section"  id="section1">
    <div className= "header_photo"><img  src={require("../assets/Home-Hero-Image.jpg")}/> </div>
        <div className="header_user-panel">
            <ul className="header_user-buttons">
                <li className="header_user-login"> <Link to={"/Login"}>Zaloguj </Link></li>
                <li className="header_user-register"> <Link to={"/Register"}> Załóż konto </Link></li>
            </ul>
            <div className="header_navbar">
                <nav className="header_navbar-content">
                    <ul className="header_navbar-items">
                        <li className="header_navbar-item">Start</li>
                        <li className="header_navbar-item">O co chodzi?</li>
                        <li className="header_navbar-item">O nas</li>
                        <li className="header_navbar-item">Funcacja i organizacje</li>
                        <li className="header_navbar-item">Kontakt</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    </div>
);
export {HomeHeader}