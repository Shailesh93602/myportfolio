<<<<<<< HEAD
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
=======
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
                As a detail-oriented developer, I strive for excellence in every
                line of code I write. I enjoy working on challenging projects,
                finding creative solutions, and continuously expanding my
                knowledge.
              </p>
              <p>
                During my educational journey, I acquired a solid understanding
                of software development principles and gained hands-on
                experience through various projects. I am adept at developing
                robust backend systems, crafting intuitive frontend interfaces,
                and seamlessly integrating the two.
              </p>
              <p>
                Collaboration and communication are at the core of my approach.
                I believe in working closely with clients and teammates to
                ensure that the final product aligns with their vision and meets
                the needs of end-users.
              </p>
              <p>
                With a growth mindset, I eagerly keep up with the latest
                industry trends, attending webinars, and exploring new
                technologies. This allows me to incorporate cutting-edge tools
                and frameworks into my work, resulting in efficient and scalable
                solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring the outdoors,
                indulging in a good book, or experimenting with new recipes in
                the kitchen. These activities rejuvenate my creativity and bring
                balance to my life.
              </p>
              <p>
                I am currently seeking opportunities to contribute my skills and
                enthusiasm to a dynamic development team. If you'd like to
                discuss a potential collaboration or have any inquiries, please
                don't hesitate to reach out. I look forward to connecting with
                you!
              </p>
              <button className="btn" onClick={toggleContent}>
                Show Less
              </button>
            </div>
          ) : (
            <div id="aboutMeShort">
              <p>
                Hello, I'm Shailesh Chaudhari, a passionate Full Stack Developer
                based in Gujarat, India.
              </p>
              <p>
                With a strong foundation in Node.js, Express, React, and MongoDB,
                I have embarked on an exciting journey to create innovative and
                user-centric web applications.
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
>>>>>>> 2b3ecb6ee4f3abc9d95daf1cd051e0e7629e2691
