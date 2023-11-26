import React, { useState } from "react";
import aboutImg from "../images/home.webp";

const About = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <section className="about extra-padding" id="about">
      <div className="about-img">
        <img src={aboutImg} alt="about" />
      </div>
      <div id="aboutMe">
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Fullstack Developer</h3>
          {showFullContent ? (
            <div id="aboutMeFull">
              <p>
                Passionate Full Stack Developer based in Gujarat, India,
                dedicated to crafting high-quality, user-centric web applications.
              </p>
              <div className="skills-section">
                <h3>Skills</h3>
                <ul className="skills-list">
                  <li>Node.js</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>C++</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Javascript</li>
                  <li>Java</li>
                </ul>
              </div>
              <p>
                Check out my resume for more details:
                {" "}
                <a
                  className="resume-link"
                  href="https://drive.google.com/file/d/1bJjqTSmoIROSvH1vb8xoZ-zZDAC96eS5/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </p>
              <button className="btn" onClick={toggleContent}>
                Show Less
              </button>
            </div>
          ) : (
            <div id="aboutMeShort">
              <p>
                Hello, I'm Shailesh Chaudhari, a Full Stack Developer with a
                passion for creating impactful web solutions.
              </p>
              <button className="btn" onClick={toggleContent}>
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;