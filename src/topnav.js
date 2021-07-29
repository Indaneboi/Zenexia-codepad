import React from "react";
import "./App.css";
import logo from "./images/logo.png";
import { faCloud} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopNavigation() {
  return (
    <div>
      <div className="mainheader">
        <div className="right">
          <img className="logo" src={logo} alt="aa" />
          <div className="text">
            <h2>Zenexia{"\u00A0"}</h2>
            <h3>Codepad </h3>
          </div>
        </div>
        <div>
          <br />
          <div className="buttons">
            <a href="https://zenexia-save.netlify.app/">
              <button className="Topbutton1">
                <FontAwesomeIcon color="#ADAFBC" icon={faCloud} /> {"\u00A0"}
                Save
              </button>
            </a>
            <a href="https://zenexia-sign-up.netlify.app/">
              <button className="Topbutton2"> Sign Up</button>
            </a>
            <a href="https://zenexia-log-in.netlify.app/">
              <button className="Topbutton1"> Log In</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
