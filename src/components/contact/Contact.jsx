import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_9akcpzh", "template_gw30zwf", form.current, "Muc1yUGXrZZ-rgz2Q");
    e.target.reset();
  };
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Lets Connect</h2>
      <span className="section-subtitle">Contact Me</span>
      <div className="contact-container container grid">
        <div className="contact-content">
          {/* <h3 className="contact-title">Write me a message</h3> */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                Name
              </label>
              <input type="text" name="name" className="contact-form-input" placeholder="Insert your name" />
            </div>
            <div className="contact-form-div">
              <label htmlFor="" className="contact-form-tag">
                Email
              </label>
              <input type="text" name="email" className="contact-form-input" placeholder="Insert your email" />
            </div>
            <div className="contact-form-div contact-form-area">
              <label htmlFor="" className="contact-form-tag">
                Message
              </label>
              <textarea name="message" cols="30" rows="10" className="contact-form-input" placeholder="Write message here"></textarea>
            </div>
            <button className="button button--flex">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
