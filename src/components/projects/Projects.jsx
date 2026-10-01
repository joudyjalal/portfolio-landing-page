import React from "react";
import "./Projects.css";
import IMG1 from "../../assets/portfolio6.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio5.png";

const imageArr = [
  {
    id: 1,
    img: IMG1,
    title: "portfolio1",
  },
  {
    id: 2,
    img: IMG2,
    title: "portfolio2",
  },
  {
    id: 3,
    img: IMG3,
    title: "portfolio3",
  },
  {
    id: 4,
    img: IMG4,
    title: "portfolio4",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top-section">
        <h5>What skills I Have</h5>
        <h2>My Expreience</h2>
      </div>
      <div className="container projects-container">
        {imageArr.map(({ id, img, title }) => (
          <article key={id} className="port">
            <div className="item">
              <img src={img} alt="" className="port-img" />
            </div>
            <h3>{title}</h3>
            <div className="port-btn">
              <a href="#" className="btn">
                Github
              </a>
              <a href="#" className="btn btn-primary">
                live demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
