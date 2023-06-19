import React, { useState, useEffect } from "react";
import homeImg from "../images/home.png";

const Index = () => {
  const elements = ['Fullstack Developer', 'C++ Developer', 'Node Developer', 'React Developer'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;

    const typingTimer = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentElement = elements[wordIndex];
        const word = currentElement.slice(0, charIndex + 1);
        const isLastChar = charIndex === currentElement.length - 1;

        if (isLastChar) {
          if (wordIndex === elements.length - 1) {
            wordIndex = 0;
          } else {
            wordIndex++;
          }
          charIndex = 0;
        } else {
          charIndex++;
        }

        return word;
      });
    }, 200);

    return () => clearInterval(typingTimer); 
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Shailesh Chaudhari</h1>
        <h3>And I'm a <span className="multiple-text">{currentWord}</span></h3>
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
