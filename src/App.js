import portfolioImg from "./img/portfolio.jpeg";
import github from "./img/github.png";
import linkedin from "./img/linkedin-logo.png";
import resume from "./img/cv.png";

import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="intro" className="mini-view">
        Hi, I'm Mika !
      </div>
      <div id="about" className="mini-view vertical ">
        <h1>Aspiring front-end web developer</h1>
        <p>
          Computer Science student at Western Michigan University and will
          graduate by Fall 2022. Based in Kalamazoo, Michigan.
        </p>

        <div className="about-content">
          <div className="profile">
            <div className="profile-img">
              <img src={portfolioImg} alt="" />
            </div>
          </div>
          <div className="profile-description">
            <h2>Passionate</h2>
            <p>
              I enjoy working on web-development related technologies and always
              strive to make beautiful websites. Found my love for programming
              at a young age and will always continue to hone my skills.
            </p>
            <h2>Team-player, Independent worker</h2>
            <p>
              I'm often in an environment where I would collaborate with other
              people, yet I am also capable of working by myself when necessary.
            </p>
            <h2>Task-Oriented</h2>
            <p>
              When given a task, I strive to do my best to provide quality
              solutions in a timely manner.
            </p>
          </div>
        </div>
      </div>

      {/* <div id="skills" className="mini-view">
        <div className="skill-table">
          <h2>My Current Skillset</h2>
          <table>
            <tr>
              <th>Languages</th>
              <td>Python, Javascript, Node.js, C,</td>
            </tr>
            <tr>
              <th>Frameworks</th>
              <td>React, Express, Bootstrap, Django, Flask</td>
            </tr>
            <tr>
              <th>Databases</th>
              <td>MongoDB, MySQL</td>
            </tr>
            <tr>
              <th>Operating Systems</th>
              <td>Windows, Linux</td>
            </tr>
            <tr>
              <th>Others</th>
              <td>HTML, CSS, Git </td>
            </tr>
          </table>
        </div>
      </div> */}
      <div id="experience" className="mini-view vertical">
        <div>
          <h2>Software Engineering Intern @ Populix</h2>
          <span>February 2021 - May 2021</span>
          <p>
            Implemented filters to support the search bar for an existing
            product database view, increasing optimization and user experience
            by 25 percent
          </p>

          <ul>
            <li>
              Created filters using MaterialUI library in React while calling
              HTTP requests to fetch available brands options based on
              categories that users have previously selected
            </li>
            <li>
              Created MySQL statements for the company’s REST API to return
              selected products based on said filters using NodeJS, Express and
              Sequelize
            </li>
          </ul>
        </div>

        <div>
          <h2>Grading Assistant @ Western Michigan University</h2>
          <span>January 2021 - May 2021</span>
          <p>
            Collaborated with professors in a fast-paced environment, graded
            student assignments and tests, facilitated office hours for students
            taking Programming in C for Engineers and Cybersecurity
          </p>
        </div>
      </div>

      <div id="projects" className="mini-view vertical">
        <div className="projects-container">
          <Card demo="https://wmu-back2back.netlify.app/">
            <h2>Back2Back Fundraiser</h2>
            <p>
              Website dedicated for the Back2Back fundraiser supporting for the
              Black Lives Matter movement and the Stop Asian American Pacific
              Islander Hate.
            </p>

            <div className="tags">
              <div className="tag">React</div>
              <div className="tag">Javascript</div>
              <div className="tag">HTML</div>
              <div className="tag">CSS</div>
              <div className="tag">Node.js</div>
              <div className="tag">Express</div>
              <div className="tag">PostgreSQL</div>
            </div>
          </Card>
          <Card>
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
      <footer className="vertical">
        <a href="mailto:someone@yoursite.com">Let's work together</a>
        <div>
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={resume} alt="" />
        </div>
      </footer>
    </div>
  );
}

export default App;
