import React from "react";
import "./about.css";
import ImageMe from "../../assets/cat.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import "./About.css";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>get to know</h5>
        <h2>about me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ImageMe} alt="About_Me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>...</small>
            </div>
            <div className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>...</small>
            </div>
            <div className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>...</small>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            molestiae iure excepturi asperiores, vel cumque? Repellat, eveniet.
            Quo quibusdam beatae qui molestias dicta! Ullam enim, sunt
            aspernatur delectus fuga consequuntur!
          </p>
          <a href="#contact" className="btn btn-primary">
            let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
