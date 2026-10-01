import React from "react";
import "./Skills.css";
import css from "../../assets/css3.svg";
import figma from "../../assets/figma.svg";
import js from "../../assets/javascript.svg";
import reactjs from "../../assets/react.svg";
const imageArr = [
  {
    id: 1,
    img: css,
    title: "css",
    disc: "User Interface",
  },
  {
    id: 2,
    img: figma,
    title: "figma",
    disc: "design tool",
  },
  {
    id: 3,
    img: js,
    title: "javascript",
    disc: "interactive",
  },
  {
    id: 4,
    img: reactjs,
    title: "reactjs",
    disc: "framework",
  },
];
export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="top-section">
        <h5>What skills I Have</h5>
        <h2>My experience</h2>
      </div>
      <div className="container container_skills">
        {imageArr.map(({ id, img, title, disc }) => (
          <article key={id} className="card_skill">
            <div className="icon">
              <img src={img} alt="" />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
          </article>
        
        ))}
      </div>
    </section>
  );
}
