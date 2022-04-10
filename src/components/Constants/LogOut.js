import React from "react";
import { Navbar } from "./Navbar";
import Decoration from "../../assets/Decoration.svg";
import { Link } from "react-router-dom";
import "../../scss/Constants/LogOut.scss";

const LogOut = () => {
  return (
    <div className="logout_section" title="section8" id="section8">
      <div className="logout_navbar">
        <Navbar />
      </div>
      <div className="logout_title">
        <h1>
          Wylogowanie nastąpiło <br />
          pomyślnie!
        </h1>
        <div className="logout_decoration-image">
          {" "}
          <img src={Decoration} alt="decoration" />
        </div>
      </div>

      <div className="logout_user-panel">
        <ul className="logout_user-button">
          <li className="logout_user-main">
            {" "}
            <Link to={"/"}> Strona główna </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export { LogOut };
