import React, { useState, useCallback, useMemo } from "react";
// import ReactDOM from "react-dom";
import { useInterval } from "react-use";
import homeImg from "../images/about.png";

const Index = () => {
  const elements = useMemo(() => ['Fullstack Developer', 'C++ Developer', 'Node Developer', 'React Developer'], []);
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
        <h3>And I'm a <span className="multiple-text">{elements[wordIndex].slice(0, charIndex)}</span></h3>
        <p>Welcome to my portfolio! I'm a passionate Full Stack Developer skilled in building dynamic web
          applications using Node.js, Express, React, and MongoDB. I'm dedicated to delivering high-quality code
          and creating seamless user experiences. Let's turn your ideas into reality!</p>
        <div className="social-media">
          <a href="https://www.facebook.com/profile.php?id=100042740334005&mibextid=ZbWKwL"><i className='bx bxl-facebook'></i></a>
          <a href="https://twitter.com/Shailes80781165?t=4MFMTg_8TTMPxZTYjtAQGQ&s=08"><i className='bx bxl-twitter'></i></a>
          <a href="https://instagram.com/thenameisshaileshbhai?igshid=ZDdkNTZiNTM="><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://www.linkedin.com/in/shaileshbhai-chaudhari-295074200"><i className='bx bxl-linkedin'></i></a>
        </div>
      </div>

      <div className="home-img">
      <img src={homeImg} alt="home" />
      </div>
    </section>
  )
}

export default Index;
