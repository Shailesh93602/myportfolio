import React, { useState } from "react";

const Blogs = () => {
  const [showContent, setShowContent] = useState({
    aboutFsd: false,
    aboutCpp: false,
    aboutFd: false,
  });

  const toggleContent = (section) => {
    setShowContent((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <section className="blogs padding" id="blogs">
      <h2 className="heading">
        My <span>Blogs</span>
      </h2>

      <div className="blogs-container">
        <div className="blogs-box">
          <i className="bx bx-code-alt"></i>
          <h3>Fullstack Development</h3>
          {showContent.aboutFsd ? (
            <div id="aboutFsdFull">
              <p>
                With years of experience and a passion for problem-solving, I
                strive to deliver high-quality solutions that meet the unique
                needs of each project. Whether it's designing responsive user
                interfaces or building robust server-side functionalities, I'm
                committed to providing efficient and scalable solutions.
              </p>
              <p>
                My skills include HTML, CSS, JavaScript, React, Node.js,
                Express, MongoDB, and more. I stay up-to-date with the latest
                industry trends and technologies to ensure that my clients
                receive cutting-edge solutions that drive results.
              </p>
              <p>
                If you're looking for a dedicated fullstack developer to bring
                your web application ideas to life, I'm here to help. Feel free
                to reach out to discuss your project requirements or ask any
                questions you may have.
              </p>
              <button className="btn" onClick={() => toggleContent('aboutFsd')}>
                Show Less
              </button>
            </div>
          ) : (
            <div id="aboutFsdShort">
              <p>
                Welcome to my blogs page! As a fullstack developer, I
                specialize in creating dynamic and interactive web applications.
                With expertise in both frontend and backend technologies, I can
                handle the entire development process from start to finish.
              </p>
              <button
                className="btn"
                onClick={() => toggleContent('aboutFsd')}
              >
                Read More
              </button>
            </div>
          )}
        </div>

        <div className="blogs-box">
          <i className="bx bxl-c-plus-plus"></i>
          <h3>C++ Development</h3>
          {showContent.aboutCpp ? (
            <div id="aboutCppFull">
              <p>
                As a C++ developer, I have extensive experience in developing
                efficient and scalable applications.
              </p>
              <p>
                I am proficient in various aspects of C++ development,
                including object-oriented programming, data structures,
                algorithms, memory management, and performance optimization.
              </p>
              <p>
                Throughout my career, I have worked on a wide range of projects,
                such as developing desktop applications, embedded systems, game
                development, and more.
              </p>
              <p>
                I strive to write clean, modular, and maintainable code,
                ensuring the highest standards of quality and reliability in my
                work.
              </p>
              <button className="btn" onClick={() => toggleContent('aboutCpp')}>
                Show Less
              </button>
            </div>
          ) : (
            <div id="aboutCppShort">
              <p>
                Hello, I'm Shailesh Chaudhari, a skilled C++ Developer based in
                Gujarat, India.
              </p>
              <p>
                I have a strong passion for programming and a deep understanding
                of the C++ language.
              </p>
              <button
                className="btn"
                onClick={() => toggleContent('aboutCpp')}
              >
                Read More
              </button>
            </div>
          )}
        </div>

        <div className="blogs-box">
          <i className="bx bx-code"></i>
          <h3>Frontend Developer</h3>
          {showContent.aboutFd ? (
            <div id="aboutFdFull">
              <p>
                With a strong foundation in HTML, CSS, and JavaScript, I have
                experience building responsive and interactive websites.
              </p>
              <p>
                I am proficient in front-end frameworks and libraries such as
                React, Vue.js, and Angular, which I leverage to develop robust
                and scalable applications.
              </p>
              <p>
                I have a keen eye for design and pay attention to detail to
                create visually appealing and intuitive user interfaces.
              </p>
              <p>
                Collaboration and problem-solving are integral to my work
                process. I enjoy working in cross-functional teams, translating
                design concepts into functional and efficient code.
              </p>
              <button className="btn" onClick={() => toggleContent('aboutFd')}>
                Show Less
              </button>
            </div>
          ) : (
            <div id="aboutFdShort">
              <p>
                Hello, I'm Shailesh Chaudhari, a passionate Frontend Developer
                based in [Your Location].
              </p>
              <p>
                I specialize in creating engaging and user-friendly web
                interfaces using modern frontend technologies.
              </p>
              <button className="btn" onClick={() => toggleContent('aboutFd')}>
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;