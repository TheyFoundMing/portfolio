import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="intro" className="mini-view">
        Hi, I'm Mika
      </div>
      <div id="about" className="mini-view">
        Aspiring front-end web developer. Computer Science student at Western
        Michigan University and will graduate by Fall 2022. Based in Kalamazoo,
        Michigan.
      </div>
      <div id="skills" className="mini-view">
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
      </div>
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
        <div>
          <h2>Back2Back Fundraiser</h2>
          <p>
            Website dedicated for the Back2Back fundraiser supporting for the
            Black Lives Matter movement and the Stop Asian American Pacific
            Islander Hate.
          </p>
          <ul>
            <li>
              Called HTTP requests to the event’s REST API to fetch vendors
              listed for the event
            </li>
            <li>
              Client-app was implemented with React, Javascript and HTML/CSS.
            </li>
            <li> API was implemented with Node.js, Express and PostgreSQL.</li>
          </ul>
        </div>
        <div>
          <h2>Data Center Management App</h2>
          <p>
            Keeps track of networks, server racks and the objects located inside
            the racks themselves.
          </p>
          <ul>
            <li>Implemented user and project authentication</li>
            <li>
              Implemented Create, Read, Update and Delete functions for server
              racks, objects and networks
            </li>
            <li>
              Client-app was implemented with React, Javascript and HTML/CSS
            </li>
            <li>Server API was implemented with Python, Django and MongoDB</li>
          </ul>
        </div>
        <div>
          <h2>Parentheses Checker</h2>
          <p>
            Program written in Python which checks whether a string contains
            balanced parentheses
          </p>
          <ul>
            <li>
              Stacks and Queues were implemented using Doubly Linked Lists to
              keep track of the order of the parentheses in the string
            </li>
          </ul>
        </div>
        <div>
          <h2>Huffman Tree Coding</h2>
          <p>
            Program written in Python which takes in a dictionary of characters
            and their frequencies and return the corresponding Huffman codes
          </p>
          <ul>
            <li>
              Minheaps were implemented and used as a priority queue for the
              Huffman Tree algorithm
            </li>
          </ul>
        </div>
        <div>
          <h2>5 Days - Weather App</h2>
          <p>
            Tells the general weather of any area given, powered by the
            OpenWeather API and created with React, Javascript and HTML/CSS.
          </p>
        </div>
        <div>
          <h2>Rock, Paper, Scissors</h2>
          <p>
            Simple rock, paper, scissors game made in vanilla Javascript and
            HTML/CSS.
          </p>
        </div>
      </div>
      <footer>
        <a href="mailto:someone@yoursite.com">Let's work together</a>
      </footer>
    </div>
  );
}

export default App;
