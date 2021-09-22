import React from "react";
//CSS
import "./Head.css";
//Components
import Navigation from "./Navigation/Navigation";
import Welcome from "./Welcome/Welcome";

const Head = () => {
  return (
    <div className="head">
      <Navigation />
      <Welcome />
    </div>
  );
};

export default Head;
