import React from 'react';
import './scss/App.scss';
import {Home} from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Register} from "./components/Register";
import {Login} from "./components/Login";

const App = () => (

    <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
)

export default App;
