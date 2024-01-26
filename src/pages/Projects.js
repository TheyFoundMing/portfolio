import React from "react";
import Card from "../components/Card";

function Projects() {
  return (
    <div id="projects" className="mini-view vertical">
      <div className="projects-container">
        <Card github="https://github.com/TheyFoundMing/ooga-booga-poetry">
          <h2>Ooga Booga Poetry</h2>
          <p>
            Based on an existing Cardgame, "Poetry for Neanderthals", Ooga Booga
            Poetry is a web-socket game that can be played with multiple people
            over a voicecall
          </p>

          <div className="tags">
            <div className="tag">Node.js</div>
            <div className="tag">Javascript</div>
            <div className="tag">Socket.IO</div>
            <div className="tag">Tailwind CSS</div>
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
          </div>
        </Card>

        <Card
          github="https://github.com/TheyFoundMing/portfolio-v2"
          demo="https://theyfoundming.github.io/portfolio-v2/"
        >
          <h2>My Portfolio</h2>
          <p>
            My current portolio, to showcase my personal projects as well as the
            experience I've gained throughout the years
          </p>

          <div className="tags">
            <div className="tag">React</div>
            <div className="tag">Javascript</div>
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
          </div>
        </Card>

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
        <Card
          github="https://github.com/FundraiserEvent-WebDevelopment/react-frontend"
          demo="https://wmu-back2back.netlify.app/"
        >
          <h2>Back2Back</h2>
          <p>
            Website created for the Campus Activity Board's fundraising event to
            showcase vendors whom are people of color in support for the Black
            Lives Matter and the Asian American Pacific Islander Movements
          </p>

          <div className="tags">
            <div className="tag">React</div>
            <div className="tag">Javascript</div>
            <div className="tag">HTML</div>
            <div className="tag">CSS</div>
            <div className="tag">Node.js</div>
            <div className="tag">Heroku</div>
            <div className="tag">Netlify</div>
          </div>
        </Card>

        <Card>
          <h2>Memory Allocation Simulator + Test Runner</h2>

          <p>
            Replicates dynamic memory allocation for programs upon request and
            created a test runner from scratch to run tests provided for the
            project
          </p>
          <p>
            Due to file corruption with the code, I'm unable to upload it on
            GitHub
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
  );
}

export default Projects;
