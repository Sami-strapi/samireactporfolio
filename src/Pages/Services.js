import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="S-sections">
      <div className="section1">
        <div className="h1">
          <h1>Web-Development</h1>
        </div>
        <div className="S-content">
          
          <span>I Working with differents Companies on different Technologies </span>
          <span className="span3"> React js, Next js, Wordpress, Angular, Bootstrap, Html, Css, Js, Node js, MongoDB</span>
          <span>I Worked on different Platforms following below</span>
          <ul>
            <li>UpWork</li>
            <li>Fiverr</li>
            <li>Freelancer.com</li>
            <li>Guru</li>
          </ul>
        </div>
      </div>
      <div className="S-section2">
        <h1 className="app-h2">App Development</h1>
        <span className="S-span1">I developing Applications with different languages/Technologies using </span>
        <span className="S-span2">Flutter, React-Native</span>
        <span className="S-span1">In different language following below</span>
        <span className="S-span2">Kotlin, Java, Swift, C++, Python</span>
        <span className="S-span1">I Worked on different Platforms following below</span>
          <ul className="S-span1">
            <li>UpWork</li>
            <li>Fiverr</li>
            <li>Freelancer.com</li>
            <li>Guru</li>
          </ul>
      </div>
    </div>
  );
};

export default Services;
