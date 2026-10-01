import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import Contact from "./components/contact/Contact";

import "./App.css";
export default function App() {
  return (
    <div>
      <Home />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
