import React from "react";
import Card from "../components/Card";

function Projects () {
    return (<div id="projects" className="mini-view vertical">
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
  </div>)
}

export default Projects; 