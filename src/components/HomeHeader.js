import React from 'react';
import {Link} from 'react-router-dom';
import { Link as Scroll } from "react-scroll";

const HomeHeader = () => (
    <div className="header">
    <div className="header_section" title="section1" id="section1">
    <div className= "header_photo"><img  src={require("../assets/Home-Hero-Image.jpg")}/> </div>
        <div className="header_user-panel">
            <ul className="header_user-buttons">
                <li className="header_user-login"> <Link to={"/Login"}>Zaloguj </Link></li>
                <li className="header_user-register"> <Link to={"/Register"}> Załóż konto </Link></li>
            </ul>
            <div className="header_navbar">
                <nav className="header_navbar-content">
                    <ul className="header_navbar-items">
                        <li className="header_navbar-item"><Scroll activeClass="active"
                                                                 to="section1"
                                                                 spy={true}
                                                                 smooth={true}
                                                                 offset={-70}
                                                                 duration={500}>Start </Scroll></li>
                        <li className="header_navbar-item"><Scroll activeClass="active"
                                                                   to="section2"
                                                                   spy={true}
                                                                   smooth={true}
                                                                   offset={-70}
                                                                   duration={500}>O co chodzi?</Scroll></li>
                        <li className="header_navbar-item"><Scroll activeClass="active"
                                                                   to="section3"
                                                                   spy={true}
                                                                   smooth={true}
                                                                   offset={-70}
                                                                   duration={500}>O nas?</Scroll></li>
                        <li className="header_navbar-item"><Scroll activeClass="active"
                                                                   to="section4"
                                                                   spy={true}
                                                                   smooth={true}
                                                                   offset={-70}
                                                                   duration={500}>Fundacja i organizacje?</Scroll></li>
                        <li className="header_navbar-item"><Scroll activeClass="active"
                                                                   to="section5"
                                                                   spy={true}
                                                                   smooth={true}
                                                                   offset={-70}
                                                                   duration={500}>Kontakt</Scroll></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    </div>
);
export {HomeHeader}