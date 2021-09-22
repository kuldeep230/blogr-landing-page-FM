import React from "react";
//CSS
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-text-wrapper">
      <h1>
        <span>A modern</span> publishing platform
      </h1>
      <p>Grow your audience and build your online brand</p>
      <div className="btn-wrapper">
        <button className="btn btn-start">Start for Free</button>
        <button className="btn btn-learn">Learn More</button>
      </div>
    </div>
  );
};
export default Welcome;
