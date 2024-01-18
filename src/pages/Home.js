import React from "react";
import { HashLink } from "react-router-hash-link";
import arrow from "../img/down-thick.png";

function Home() {
  return (
    <HashLink smooth to="/#about">
      <div id="intro" className="mini-view">
        <h2>Hi, I'm Mika!</h2>
        <img src={arrow} alt="" />
      </div>
    </HashLink>
  );
}

export default Home;
