import React from "react";
//CSS
import "./Section3.css";
//Images
import IllustrationLaptop from "../../../assets/images/illustration-laptop-mobile.svg";

const Section3 = () => {
  return (
    <section className="section section3">
      <div className="content-wrapper">
        <img
          className="img-illustrationLaptop"
          src={IllustrationLaptop}
          alt="illustration laptop"
        />
        <div className="text-block text-block-s3">
          <h3>Free, open, simple</h3>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting. RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h3>Powerful tooling</h3>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Section3;
