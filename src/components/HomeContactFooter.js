import React from 'react';
import FooterPhoto from "../assets/Background-Contact-Form.jpg";
import Decoration from "../assets/Decoration.svg";
import Facebook from "../assets/Facebook.svg"
import Instagram from "../assets/Instagram.svg"

const HomeContactFooter = () => (

    <div className="columns_section" title="section5" id="section5">

 <div className="footer_photo">
     <img src ={FooterPhoto} alt="background footer clothes"/>
 </div>
         <div className="footer_right-section">
             <div className="footer_title"><h1>Skontaktuj się z nami</h1>
                 <div className="header_decoration-image"> <img src ={Decoration} alt="decoration"/>
                 </div>
         </div>
             <form action="" className="footer_form">
             <div className="footer_form-info">
                 <label>
                     Podaj swoje imię
                 <input className="input-100" name="name" required type="text"  />
                 </label>
                 <label>
                 Wpisz swój email
                 <input className="input-100" name="email" required type="text" />
                 </label>
             </div>
                 <div className="footer_form-message">
                     <label>
                    Wpisz swoją wiadomość
                  <textarea className="input-250" name="message" required  />
                     </label>
                 </div>
                 <div className="footer_form-button"><button type="submit"  value="Submit">Wyślij</button></div>
             </form>
             <div className="copyright"><span> Copyright by Coders Lab</span></div>
             <div className="social">
                 <img src ={Facebook} alt="Facebook app"/>
                 <img src ={Instagram} alt="Instagram app"/>
             </div>
     </div>
     </div>
        );
export {HomeContactFooter}