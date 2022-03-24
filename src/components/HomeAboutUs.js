import React from 'react';
import '../scss/Home/HomeAboutUs.scss'
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg"


const HomeAboutUs = () => (
    <div className="columns_section-fourth" title="section3" id="section3">
        <div className="columns_section-content">
            <div className="about_title"><h1> O nas</h1>
                <div className="about_decoration-image"> <img src ={Decoration} alt="decoration"/></div>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src ={Signature} alt="signature"/>
            </div>
        </div>
        <div className="about_image"><img src ={People} alt="people"/></div>
    </div>
);
export {HomeAboutUs}