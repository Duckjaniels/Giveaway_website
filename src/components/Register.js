import React from "react";
import {Navbar} from "./Navbar";
import Decoration from "../assets/Decoration.svg";
import useForm from "../../src/components/useForm";
import validate from "../../src/components/validateInfo"
import {Link} from "react-router-dom";
import "../scss/Register.scss"


const Register = () => {
    const {handleChange, values, handleSubmit, errors,} = useForm(validate);

    return(
        <div className="register_section" title="section7" id="section7">
            <div className="register_navbar">
                <Navbar/>
            </div>
            <div className="register_title"><h1>Załóż konto</h1>
                <div className="register_decoration-image"> <img src ={Decoration} alt="decoration"/></div>
            </div>

            <form action="" className="register_form" onSubmit={handleSubmit}>
                <div className="register_form-info">
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
                    <label>
                        Powtórz hasło
                        <input className="input-100"
                               name="password2"
                               required type="password2"
                               value={values.password2}
                               onChange={handleChange}/>
                        {errors.password2 && <p>{errors.password2}</p>}
                    </label>
                </div>
            </form>
            <div className="register_user-panel">
                <ul className="register_user-buttons">
                    <li className="register_user-login"> <Link to={"/Login"}>Zaloguj się </Link></li>
                    <li className="register_user-register"> <Link to={"/Register"}> Załóż konto </Link></li>
                </ul>
            </div>
        </div>
    )};
export {Register}