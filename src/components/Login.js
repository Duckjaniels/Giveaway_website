import React from "react";
import {Navbar} from "./Navbar";
import Decoration from "../assets/Decoration.svg";
import useForm from "../../src/components/useForm";
import validate from "../../src/components/validateInfo"
import {Link} from "react-router-dom";
import "../scss/Login.scss"


const Login = () => {
const {handleChange, values, handleSubmit, errors,} = useForm(validate);

return(
    <div className="login_section" title="section6" id="section6">
        <div className="login_navbar">
            <Navbar/>
        </div>
        <div className="login_title"><h1>Zaloguj się</h1>
            <div className="login_decoration-image"> <img src ={Decoration} alt="decoration"/></div>
        </div>

        <form action="" className="login_form" onSubmit={handleSubmit}>
            <div className="login_form-info">
                <label>
                    Email
                    <input className="input-100"
                           name="email"
                           required type="text"
                           value={values.email}
                           onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </label>
                <label>
                    Hasło
                    <input className="input-100"
                           name="password"
                           required type="password"
                           value={values.password}
                           onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </label>
            </div>
        </form>
        <div className="login_user-panel">
            <ul className="login_user-buttons">
                <li className="login_user-register" type="submit" value="Submit"> <Link to={"/Register"}> Załóż konto </Link></li>
                <li className="login_user-login" type="submit" value="Submit"> Zaloguj się </li>
            </ul>
        </div>
    </div>
)};
export {Login}