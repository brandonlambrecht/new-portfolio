import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/lambrecht-cv.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <span className="section-subtitle"></span>
      <div className="about-container container grid">
        <img src={AboutImg} alt="" className="about-img" />
        <div className="about-data">
          <Info />
          <p className="about-description">My name is Brandon Lambrecht, a junior web developer originally from Montana, now living in Nashville, TN. I am seeking an opportunity to leverage my skills and passion for creating user-friendly, aesthetically pleasing web applications. With a strong interest in learning new languages and frameworks, I am dedicated to continuously improving my development expertise. I hold a bachelor's degree in Marketing and have experience in sales, finance, and account management, which has honed my analytical and communication skills. Beyond coding, I enjoy fitness, hiking, and sports.</p>
          <a download="" href={CV} className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
