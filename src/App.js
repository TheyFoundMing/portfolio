import ScrollTrigger from "react-scroll-trigger";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

import portfolioImg from "./img/portfolio.jpeg";
import meImg from "./img/me.png";

import arrow from "./img/down-thick.png";

import github from "./img/github.png";
import linkedin from "./img/linkedin-logo.png";
import resume from "./img/cv.png";

import resumeFile from "./files/Resume.pdf";

import Card from "./components/Card";

import "./App.css";

function App() {
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

      <HashLink smooth to="/#about">
        <div id="intro" className="mini-view">
          <h2>Hi, I'm Mika!</h2>
          <img src={arrow} alt="" />
        </div>
      </HashLink>

      <div id="about" className="mini-view vertical">
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
      </div>

      <div id="experience" className="mini-view vertical">
        <div class="position">
          <h2>Bootcamp and Online Instructor @ iD Tech </h2>
          <span>January 2022 - April 2022</span>
          <p>
            Delivered high-quality, individualized instruction for kids through
            an online platform on a weekly basis
          </p>
          <p>
            Provided technical support, customer service and curriculum
            assessment
          </p>
          <div className="work tags">
            <div className="tag">React</div>
            <div className="tag">Javascript</div>
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
            <div className="tag">Python</div>
            <div className="tag">Tensorflow</div>
            <div className="tag">RPG Maker MZ</div>
          </div>
        </div>

        <div class="position">
          <h2>Front-end Developer @ Back2Back </h2>
          <span>September 2021 - December 2021</span>
          <p>
            Delivered a website for a fundraiser held by Campus Activities Board
            for the BLM and AAPI movement
          </p>
          <ul>
            <li>
              Held weekly meetings to discuss with other team members on the
              product’s software architecture and deployment
            </li>
            <li>
              Debugged an issue that prevented the client app from being able to
              communicate with the server API
            </li>
          </ul>

          <div className="work tags">
            <div className="tag">React</div>
            <div className="tag">Javascript</div>
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
            <div className="tag">Node.js</div>
            <div className="tag">Heroku</div>
            <div className="tag">Netlify</div>
          </div>
        </div>

        <div class="position">
          <h2>Grading Assistant @ Western Michigan University</h2>
          <span>January 2021 - April 2021</span>
          <p>
            Collaborated with professors in a fast-paced environment, graded
            student assignments and tests, facilitated office hours for students
            taking Programming in C for Engineers and Cybersecurity
          </p>

          <div className="work tags">
            <div className="tag">C</div>
            <div className="tag">Arduino</div>
          </div>
        </div>
      </div>

      <div id="projects" className="mini-view vertical">
        <div className="projects-container">
          <Card github="https://github.com/JasonJohnsonWMU/InterventiveLearning">
            <h2>Interventive Learning</h2>
            <p>
              The Interventive Learning Web App delivers learning modules and
              assessments to elementary students using predetermined learning
              standards set by the Department of Education.
            </p>

            <div className="tags">
              <div className="tag">React</div>
              <div className="tag">Javascript</div>
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
              <div className="tag">Python</div>
              <div className="tag">Django</div>
              <div className="tag">MongoDB</div>
              <div className="tag">Bootstrap</div>
            </div>
          </Card>
          <Card github="https://github.com/WebFrameworks-F21/semester-project-michaella-alex">
            <h2>Data Center Management App</h2>
            <p>
              Keeps track of networks, server racks and the objects located
              inside the racks themselves. Features both user authentication and
              CRUD functionality
            </p>

            <div className="tags">
              <div className="tag">React</div>
              <div className="tag">Javascript</div>
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
              <div className="tag">Python</div>
              <div className="tag">Django</div>
              <div className="tag">MongoDB</div>
            </div>
          </Card>
          <Card
            github="https://github.com/TheyFoundMing/weather-app"
            demo="https://theyfoundming.github.io/weather-app/"
          >
            <h2>5 Days - Weather App</h2>
            <p>
              Tells the general weather of any area given, powered by the
              OpenWeather API.
            </p>
            <div className="tags">
              <div className="tag">React</div>
              <div className="tag">Javascript</div>
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
            </div>
          </Card>
          <Card
            demo="https://theyfoundming.github.io/Tic-Tac-Toe/"
            github="https://github.com/TheyFoundMing/Tic-Tac-Toe"
          >
            <h2>Tic-Tac-Toe</h2>
            <p>
              Simple tic-tac-toe game made in vanilla Javascript and HTML/CSS.
            </p>
            <div className="tags">
              <div className="tag">Javascript</div>
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
            </div>
          </Card>
          <Card github="https://github.com/TheyFoundMing/parenthesis-checker">
            <h2>Parentheses Checker</h2>
            <p>
              Program written in Python which checks whether a string contains
              balanced parentheses.
            </p>

            <p>
              Stacks and Queues were implemented using Doubly Linked Lists to
              keep track of the order of the parentheses in the string.
            </p>

            <div className="tags">
              <div className="tag">Python</div>
            </div>
          </Card>
          <Card github="https://github.com/TheyFoundMing/huffman-tree-coding">
            <h2>Huffman Tree Coding</h2>
            <p>
              Program written in Python which takes in a set of characters and
              their frequencies then return the corresponding Huffman codes.
            </p>
            <p>
              Minheaps used as a priority queue for the Huffman Tree algorithm.
            </p>
            <div className="tags">
              <div className="tag">Python</div>
            </div>
          </Card>
        </div>
      </div>
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
