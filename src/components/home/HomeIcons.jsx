import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
export default function HomeIcons() {
  return (
    <div className="home-icons">
      <a href="#">
        <FaLinkedin />
      </a>
      <a href="#">
        <FaGithub />
      </a>

      <a href="#">
        <FaDribbble />
      </a>
    </div>
  );
}
