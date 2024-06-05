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
          <p className="about-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio ipsa totam quisquam! Dolorem quam illo rerum voluptatum reiciendis accusamus veniam inventore? Ad expedita voluptate reprehenderit eos dolore corrupti qui reiciendis dicta ipsam, accusantium ab voluptatem cupiditate. Voluptatum vero maxime eum possimus quis eveniet voluptates pariatur sint harum quas repellat provident obcaecati nostrum sed vitae totam laborum ad placeat, iure culpa. Nam at velit omnis sint eius laudantium rem excepturi eum mollitia minus, accusamus obcaecati incidunt? Alias dicta veritatis tenetur nemo.</p>
          <a download="" href={CV} className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
