import React, { useState } from "react";

import ScrollTrigger from "react-scroll-trigger";

import meImg from "../img/me.png";

function About () {
    const [Visited, setVisited] = useState(false);

    const [firstAboutClass, setFirstAboutClass] = useState("not-visited");
    const [secondAboutClass, setSecondAboutClass] = useState("not-visited");
    const [thirdAboutClass, setThirdAboutClass] = useState("not-visited");
  
    function onEnter() {
      if (!Visited) {
        setVisited(true);
        setFirstAboutClass("not-visited visited");
        setSecondAboutClass("not-visited visited");
        setThirdAboutClass("not-visited visited");
  
        console.log("visited!");
      } else {
        console.log("it has been visited");
      }
    }

    return (      <div id="about" className="mini-view vertical">
    <div className="about-content">
      <div className="profile">
        <img src={meImg} alt="" className="me" />
      </div>
      <div className="profile-description">
        <ScrollTrigger onEnter={onEnter} />
        <h1>Michaella Magtibay</h1>

        <p>
          Full-stack engineer who creates{" "}
          <i>simple, yet beautiful websites</i>. Every project worked on is{" "}
          <i>made with love</i>.
        </p>

        <p>
          Studying Computer Science @ Western Michigan University Graduating
          in Fall 2022
        </p>
      </div>
    </div>
  </div>)
}

export default About; 