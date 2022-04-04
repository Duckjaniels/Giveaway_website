import React from 'react';
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg"
import Instagram from "../assets/Instagram.svg"
import "../scss/Home/HomeContactFooter.scss"
import useForm from "./useForm";

const HomeContactFooter = () => {
    const {handleChange, values, handleSubmit} = useForm();
return(
    <div className="columns_section-footer" title="section5" id="section5">
        <div className="footer_content">
            <div className="footer_right-section">
                <div className="footer_title"><h1>Skontaktuj się z nami</h1>
                    <div className="header_decoration-image"><img src={Decoration} alt="decoration"/>
                    </div>
                </div>
                <form action="" className="footer_form" onSubmit={handleSubmit}>
                    <div className="footer_form-info">
                        <label>
                            Podaj swoje imię
                            <input className="input-100"
                                   name="username"
                                   required type="text"
                                   placeholder="Krzysztof"
                                   value={values.username}
                                   onChange={handleChange}/>
                        </label>
                        <label>
                            Wpisz swój email
                            <input className="input-100"
                                   name="email"
                                   required type="text"
                                   placeholder="abc@xyz.pl"
                                   value={values.email}
                                   onChange={handleChange}/>
                        </label>
                    </div>
                    <div className="footer_form-message">
                        <label>
                            Wpisz swoją wiadomość
                            <textarea className="input-250"
                                      name="message"
                                      required
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci animi aperiam aut eligendi fuga illo quos ratione rem, similique. Atque ea earum ipsam maxime, nemo non omnis pariatur repellat?"
                                      value={values.message}
                                      onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="footer_form-button">
                        <button type="submit" value="Submit">Wyślij</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="footer_form-bottom">
            <div className="copyright"><span> Copyright by Coders Lab</span></div>

        </div>
        <div className="social">
            <img src={Facebook} alt="Facebook app"/>
            <img src={Instagram} alt="Instagram app"/>
        </div>
    </div>
)};
export {HomeContactFooter}