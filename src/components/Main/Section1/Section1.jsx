import React from "react";
//CSS
import "./Section1.css";
//Images
import editorMobile from "../../../assets/images/illustration-editor-mobile.svg";

const Section1 = () => {
  return (
    <section className="section section1">
      <h2>Designed for the future</h2>
      <div className="content-wrapper">
        <img
          className="img-editor-mobile"
          src={editorMobile}
          alt="editor pic for mobile view"
        />
        <div className="text-block">
          <h3>
            <span>Introducing an</span> extensible editor
          </h3>
          <p>
            Blogr features an exceedingly intutive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3>
            <span>Robust content</span> management
          </h3>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality
            you're in full control.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Section1;
