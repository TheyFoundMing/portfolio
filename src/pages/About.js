import React, { useState } from "react";

import ScrollTrigger from "react-scroll-trigger";

import meImg from "../img/profile.jpg";

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
      {/* <div> */}
        <img src={meImg} alt="" className="me" />
      {/* </div> */}
      <div className="profile-description">
        <ScrollTrigger onEnter={onEnter} />
        <h1>Michaella Magtibay</h1>

        <div className="profile-point">
          <span className="emoji">&#128075;</span>
          <p>
          Hi, I’m Mika - I majored in Computer Science and graduated in Fall 2022 at 
          Western Michigan University
          </p>
        </div>

        <div className="profile-point">
          <span className="emoji">&#128075;</span>
          <p>
          Currently working as a Customer Support Specialist at Streamline Healthcare Solutions 
          </p>
        </div>

        <div className="profile-point">
          <span className="emoji">&#128075;</span>
          <p>
          I am always dedicated to learning the latest technology, recently got certified in Amazon Web Services - Certified Developer
          </p>
        </div>

        <div className="profile-point">
          <span className="emoji">&#128075;</span>
          <p>
          I’m experienced in front-end development - I’ve worked on various projects using Javascript and Python. ReactJS is my front-end framework of choice. 
          </p>
        </div>

      </div>
    </div>
  </div>)
}

export default About; 