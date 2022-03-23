import React from 'react';
import './scss/App.scss';
import {Home} from "./components/Home";
import {HashRouter, Route, Routes} from "react-router-dom";
import {Register} from "./components/Register";
import {Login} from "./components/Login";

const App = () => (

    <HashRouter>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
    </HashRouter>
)

export default App;
