import React, { useState } from "react";
import github from "../img/github-pink.png";
import demo from "../img/pink-demo.png";
import folder from "../img/pink-folder.png";

function Card(props) {
  console.log(props);
  console.log(props.demo ? true : false);

  return (
    <div className="card">
      <div className="links">
        <img src={folder} alt="" className="folder" />
        <div>
          {props.demo && (
            <a href={props.demo}>
              <img
                src={demo}
                alt=""
                className="demo"
                onMouseOut={() => {
                  console.log("it moved out!!");
                }}
              />
            </a>
          )}
          {props.github && (
            <a href={props.github}>
              <img
                src={github}
                alt=""
                className="github"
                onMouseOut={() => {
                  console.log("it moved out!!");
                }}
              />
            </a>
          )}
        </div>
      </div>

      {props.children}
    </div>
  );
}

export default Card;
