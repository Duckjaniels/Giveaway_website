import React from 'react';
import { Link as Scroll } from "react-scroll";
import '../scss/Navbar.scss'
import {Link} from "react-router-dom";

const Navbar = () => (

    <div className="header_user-panel">
        <ul className="header_user-buttons">
            <li className="header_user-login"> <Link to={"/Login"}>Zaloguj </Link></li>
            <li className="header_user-register"> <Link to={"/Register"}> Załóż konto </Link></li>
        </ul>

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
);
export {Navbar}