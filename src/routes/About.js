import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>Overthinking is the biggest cause of unhappiness.</span>
      <span>-GAUTAMA BUDDHA</span>
    </div>
  );
}

export default About;
