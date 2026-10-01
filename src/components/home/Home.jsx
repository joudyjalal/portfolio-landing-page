import React from "react";
import "./home.css";
import me from "../../assets/cat.jpg";
import cv from "../../assets/cv.pdf";
import HomeIcons from "./HomeIcons";
function Home() {
  return (
    <div className="home" id="home">
      <div className="container home-container">
        <h4>Hello I'm</h4>
        <h1>joudy jalal</h1>
        <h4 className="text-light">frontend developer</h4>
        <div className="btns">
          <a className="btn" href={cv}>
            download cv
          </a>
          <a className="btn btn-primary" href="#">
            lets talk
          </a>
        </div>
        <div className="me">
          <img src={me} alt="" className="image" />
        </div>
        <a href="#about" className="scrolldown">
          scroll down
        </a>
        <HomeIcons />
      </div>
    </div>
  );
}

export default Home;
