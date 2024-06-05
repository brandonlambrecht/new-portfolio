import React from "react";
import "./work.css";
import Projects from "./Projects";

const Work = () => {
  return (
    <section className="work-section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <span className="section-subtitle">Most Recent work</span>
      <Projects />
    </section>
  );
};

export default Work;
