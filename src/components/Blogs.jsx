import React, { useState } from "react";

const Blogs = () => {
  const blogLinks = [
    "https://guidetofullstack.blogspot.com/2023/12/demystifying-basics-of-full-stack.html",
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
            Guide"
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
      </div>
    </section>
  );
};

export default Blogs;
