import React from 'react';
import {Link} from 'react-router-dom';
import '../../scss/Home/HomeHeader.scss'
import Decoration from "../../assets/Decoration.svg"
import BgPhoto from "../../assets/Home-Hero-Image.jpg"
import {Navbar} from "../Navbar"

const HomeHeader = () => (

    <div className="header_section" title="section1" id="section1">
    <div className= "header_photo"><img src ={BgPhoto} alt="background photo home stuff"/> </div>
        <div className="header_right-section">
            <div className="header_navbar">
                <Navbar/>
            </div>
        <div className="header_title"><h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
            <div className="header_decoration-image"> <img src ={Decoration} alt="decoration"/></div>
            <div className="header_task-panel">
                <ul className="header_task-buttons">
                    <li className="header_task-give"> <Link to={"/Login"}>Oddaj<br/>rzeczy </Link></li>
                    <li className="header_task-create"> <Link to={"/Login"}>Zorganizuj<br/> zbiórkę </Link></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
);
export {HomeHeader}