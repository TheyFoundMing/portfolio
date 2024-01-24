import { HashLink } from "react-router-hash-link";
import { useState } from "react";


import github from "./img/github.png";
import linkedin from "./img/linkedin-logo.png";
import resume from "./img/cv.png";

import resumeFile from "./files/Resume.pdf";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects"

// import "./App.css";

function App() {

  return (
    <div className="App">
      <nav>
        <HashLink smooth to="/#about" class="navlink">
          About
        </HashLink>
        <HashLink smooth to="/#experience" className="navlink">
          Experience
        </HashLink>
        <HashLink smooth to="/#projects" className="navlink">
          Projects
        </HashLink>
        <HashLink smooth to="/#contact" className="navlink">
          Contact Me
        </HashLink>
      </nav>

      <Home/>

      <About/>

      <Experience/>

      <Projects/>
      
      <footer id="contact" className="vertical">
        <a href="mailto:michaellatjandra.magtibay@wmich.edu">
          Let's work together
        </a>
        <div>
          <a href="https://github.com/TheyFoundMing">
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/micha-magtibay/">
            <img src={linkedin} alt="" />
          </a>
          <a href={resumeFile}>
            <img src={resume} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
