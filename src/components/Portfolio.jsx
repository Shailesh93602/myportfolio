import React from "react";
import portfolio1 from "../images/portfolio1.png";


const Portfolio = () => {
  return (
    <section className="portfolio padding" id="portfolio">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
        <img src={portfolio1} alt="portfolio1" />
        <div className="portfolio-layer">
            <h4>Cricket Auction System</h4>
            <p className="section-description">
              The Cricket Auction System is a web application developed for the
              college cricket league, aimed at simplifying the player
              registration and auction process. It is built using Node.js,
              Express.js, EJS, and MongoDB, providing a seamless experience for
              managing player registrations and conducting auctions.
            </p>
            <a
              href="https://sportifygec.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
        <img src={portfolio1} alt="portfolio1" />

          <div className="portfolio-layer">
            <h4>Jarvis AI</h4>
            <p className="section-description">
              Jarvis AI is an advanced Android application developed using Java
              and XML that brings the power of voice commands to your smartphone.
              With Jarvis AI, you can perform various tasks effortlessly just by
              using your voice.
            </p>
            <a
              href="https://github.com/Shailesh93602/jarvis-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
        <img src={portfolio1} alt="portfolio3" />
        <div className="portfolio-layer">
            <h4>MasteryPrep</h4>
            <p className="section-description">
              The MasteryPrep is an online platform to learn the basic fundamentals of programming to crack technical interviews.
              It provides basics of Data Structures and Algorithms, Database Management System, Object Oriented Programming, Problem Solving and Common Interviw Questions. It is built using MERN Stack i.e., React, Node.js, Express and MongoDB.
            </p>
            <a
              href="https://www.github.com/shailesh93602/MasteryPrep/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>

        <div className="portfolio-box">
        <img src={portfolio1} alt="portfolio1" />

          <div className="portfolio-layer">
            <h4>TODO List</h4>
            <p className="about-description">
              The To-Do List application is a simple yet powerful tool designed
              to help you stay organized and manage your tasks effectively. It
              provides a user-friendly interface to create, track, and prioritize
              your to-do items seamlessly.
            </p>
            <a
              href="https://github.com/Shailesh93602/todolist"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bx-link-external"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
