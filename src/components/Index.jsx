import React, { useState, useCallback, useMemo } from "react";
import { useInterval } from "react-use";
import homeImg from "../images/about.png";

const Index = () => {
  const elements = useMemo(
    () => [
      "Fullstack Developer",
      "C++ Developer",
      "Node Developer",
      "React Developer",
    ],
    []
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const typingTimer = useCallback(() => {
    setCharIndex((prevCharIndex) => prevCharIndex + 1);

    if (charIndex === elements[wordIndex].length) {
      setCharIndex(0);
      if (wordIndex === elements.length - 1) {
        setWordIndex(0);
      } else {
        setWordIndex(wordIndex + 1);
      }
    }
  }, [elements, charIndex, wordIndex]);

  useInterval(typingTimer, 200);

  return (
    <section className="home extra-padding" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Shailesh Chaudhari</h1>
        <h3>
          And I'm a{" "}
          <span className="multiple-text">
            {elements[wordIndex].slice(0, charIndex)}
          </span>
        </h3>
        <p>
          Welcome to my portfolio! I'm a passionate Full Stack Developer skilled
          in building dynamic web applications using Node.js, Express, React,
          and MongoDB. I'm dedicated to delivering high-quality code and
          creating seamless user experiences. Let's turn your ideas into
          reality!
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/your-linkedin-profile-url">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/your-github-profile-url">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.codechef.com/users/shaileshbhai03">
            <i className="bx bxl-c-plus-plus"></i>
          </a>
          <a href="https://www.hackerrank.com/profile/shailesh93602">
            <i className="bx bx-code-alt"></i>
          </a>
        </div>
      </div>

      <div className="home-img">
        <img src={homeImg} alt="home" />
      </div>
    </section>
  );
};

export default Index;