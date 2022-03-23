import React from 'react';
import {Link} from 'react-router-dom';
import {HomeHeader,} from "./HomeHeader";
import {HomeContactFooter} from "./HomeContactFooter";
import {HomeWhoHelp} from "./HomeWhoHelp";
import {HomeEasySteps} from "./HomeEasySteps";
import {HomeAboutUs} from "./HomeAboutUs";
import {HomeThreeColumns} from "./HomeThreeColumns";

const Home = () => (
    <>
        <Link to="/">Start</Link>
        <HomeHeader/>
       <HomeThreeColumns/>
            <HomeEasySteps/>
            <HomeAboutUs/>
            <HomeWhoHelp/>
            <HomeContactFooter/>
    </>
);
export {Home};