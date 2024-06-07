import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qual-section">
      <h2 className="section-title">Qualification</h2>
      <span className="section-subtitle">My personal Journey</span>
      <div className="qual-container container">
        <div className="qual-tabs">
          <div className={toggleState === 1 ? "qual-button qual-active button--flex" : "qual-button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification_icon"></i> Education
          </div>
          <div className={toggleState === 2 ? "qual-button qual-active button--flex" : "qual-button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification-icon"></i>Experience
          </div>
        </div>
        <div className="qual-sections">
          <div className={toggleState === 1 ? "qual-content qual-content-active" : "qual-content"}>
            <div className="qual-data">
              <div>
                <h3 className="qual-title">Marketing</h3>
                <span className="qual-subtitle">Montana State University</span>
                <div className="qual-calender">
                  <i className="uil uil-calendar-alt"></i> 2011-2015
                </div>
              </div>
              <div>
                <span className="qual-rounder"></span>
                <span className="qual-line"></span>
              </div>
            </div>
            <div className="qual-data">
              <div></div>
              <div>
                <span className="qual-rounder"></span>
                <span className="qual-line"></span>
              </div>

              <div>
                <h3 className="qual-title">Marketing</h3>
                <span className="qual-subtitle">University of Exeter</span>
                <div className="qual-calender">
                  <i className="uil uil-calendar-alt"></i> 2012-2013
                </div>
              </div>
            </div>

            <div className="qual-data">
              <div>
                <h3 className="qual-title">Full Stack Web Development</h3>
                <span className="qual-subtitle">Vanderbilt University</span>
                <div className="qual-calender">
                  <i className="uil uil-calendar-alt"></i> 2023-2024
                </div>
              </div>
              <div>
                <span className="qual-rounder"></span>
                <span className="qual-line"></span>
              </div>
            </div>
          </div>
          <div className={toggleState === 2 ? "qual-content qual-content-active" : "qual-content"}>
            <div className="qual-data">
              <div>
                <h3 className="qual-title">Finance Manger</h3>
                <span className="qual-subtitle">Jesco Marine</span>
                <div className="qual-calender">
                  <i className="uil uil-calendar-alt"></i> 2022-2023
                </div>
              </div>
              <div>
                <span className="qual-rounder"></span>
                <span className="qual-line"></span>
              </div>
            </div>
            <div className="qual-data">
              <div></div>
              <div>
                <span className="qual-rounder"></span>
                <span className="qual-line"></span>
              </div>

              <div>
                <h3 className="qual-title">Account Manager</h3>
                <span className="qual-subtitle">BMO</span>
                <div className="qual-calender">
                  <i className="uil uil-calendar-alt"></i> 2019-2022
                </div>
              </div>
            </div>

            <div className="qual-data">
              <div>
                <h3 className="qual-title">Brandon Ambassador</h3>
                <span className="qual-subtitle">Solidcore</span>
                <div className="qual-calender">
                  <i className="uil uil-calendar-alt"></i> 2020-Present
                </div>
              </div>
              <div>
                <span className="qual-rounder"></span>
                <span className="qual-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
