import React, { useState } from "react";

const Blogs = () => {
  const blogLinks = [
    "https://guidetofullstack.blogspot.com/2023/12/demystifying-basics-of-full-stack.html",
    "https://guidetofullstack.blogspot.com/2024/02/mastering-frontend-development.html"
  ];

  const redirectToBlog = (number) => {
    const blogUrl = blogLinks[number - 1];
    window.open(blogUrl, '_blank');
  };

  return (
    <section className="blogs padding" id="blogs">
      <h2 className="heading">
        My <span>Blogs</span>
      </h2>
      <div className="blogs-container">
        <div className="blogs-box">
          <i className="bx bx-code"></i>
          <h3>
            Demystifying the Basics of Full-Stack Development: A Beginner's
            Guide
          </h3>
          <div>
            <p>
              Hey everyone! 👋 I'm Shaileshbhai Chaudhari, a final year student passionate
              about full-stack development. Today, I want to take you on a
              journey through the basics of full-stack development, breaking
              down the concepts into simple, understandable pieces. Whether
              you're just starting or curious about how web development works,
              this guide is for you!
            </p>
            <button className="btn" onClick={() => redirectToBlog(1)}>
                Read More
            </button>
          </div>
        </div>
        <div className="blogs-box">
          <i className="bx bx-code"></i>
          <h3>
            Mastering Frontend Development: Essential Skills and Best Practices
          </h3>
          <div>
            <p>
              Imagine navigating the vast internet landscape without visually appealing websites,
              intuitive user interfaces, or interactive features. Frontend development is pivotal
              in transforming static web pages into dynamic and engaging experiences that captivate
              users and drive engagement. From the layout and styling to the functionality and
              responsiveness, front-end developers are responsible for creating the face of the
              web — the interface through which users interact with digital content and services.
            </p>
            <button className="btn" onClick={() => redirectToBlog(2)}>
                Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
