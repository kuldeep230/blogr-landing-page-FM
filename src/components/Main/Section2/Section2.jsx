import React from "react";
//CSS
import "./Section2.css";
//Images
import IllustrationPhones from "../../../assets/images/illustration-phones.svg";

const Section2 = () => {
  return (
    <>
      <div className="empty">
        <img
          className="img-illustrationPhones"
          src={IllustrationPhones}
          alt="illustation phones"
        />
      </div>
      <section className="section section2">
        <div className="content-wrapper middle-section">
          <div className="text-block-s2">
            <h3>State of the Art Infrastructure</h3>
            <p>
              With reliablity and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Section2;
