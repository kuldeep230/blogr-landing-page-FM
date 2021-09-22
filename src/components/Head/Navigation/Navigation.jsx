import React from "react";
//CSS
import "./Navigation.css";
//images
import brandLogo from "../../../assets/images/logo.svg";
import hamburgerIcon from "../../../assets/images/icon-hamburger.svg";

const Navigation = () => {
  return (
    <div className="navBar">
      <img className="brand" src={brandLogo} alt="website title" />
      <img
        className="hamburger"
        src={hamburgerIcon}
        alt="hamburger icon for menu"
      />
    </div>
  );
};

export default Navigation;
