import React from 'react';
import './about.css';
import AboutImg from '../../assets/about.jpg';
import CV from '../../assets/lambrecht-cv-2025.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className='about-section' id='about'>
      <h2 className='section-title'>About Me</h2>
      <span className='section-subtitle'></span>
      <div className='about-container container grid'>
        <img src={AboutImg} alt='' className='about-img' />
        <div className='about-data'>
          <Info />
          <p className='about-description'>My name is Brandon Lambrecht, a web designer with a background in marketing, sales, and account management. Originally from Montana and now based in Nashville, TN, I am passionate about crafting user-friendly, visually appealing web applications. With a strong drive to expand my expertise in new technologies and frameworks, I am committed to continuous learning and growth. I hold a bachelor's degree in Marketing, and my experience in sales, finance, and account management has sharpened my analytical and communication skills. Outside of work, I enjoy fitness, hiking, and sports.</p>
          <a download='' href={CV} className='button button--flex'>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
