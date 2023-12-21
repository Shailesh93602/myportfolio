import React, { useState } from "react";

const Blogs = () => {
  const [showContent, setShowContent] = useState({
    about1: false,
    about1: false,
    about3: false,
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
          <i className="bx bx-code"></i>
          <h3>
            Navigating the World of Full-Stack Development: Insights from a
            Final Year Student
          </h3>
          {showContent.about1 ? (
            <div id="about1Full">
              <p>
                <b> Embracing the Tech Arsenal: </b> <br />
                My academic journey has been a treasure trove of knowledge. From
                honing my skills in React, Node.js, Express, MongoDB, EJS, and
                JavaScript to mastering the fundamentals of C++, Java, CSS,
                HTML, and Git, I've embraced a diverse tech arsenal. Each
                language and framework has become a paintbrush in my creative
                toolbox, allowing me to design and develop engaging experiences.
              </p>
              <p>
                <b>Unlocking the Full-Stack Puzzle: </b> <br />
                The transition from theoretical concepts to practical
                application wasn't always smooth. My initial steps into
                full-stack development were like piecing together a complex
                puzzle. But through dedicated coursework, personal projects, and
                countless hours of tinkering, I began to connect the dots.
                Building a student management system, collaborating on an
                e-commerce platform, and tackling freelance gigs provided
                invaluable hands-on experience, each challenge revealing a new
                facet of the full-stack puzzle.
              </p>
              <p>
                <b>Conquering the Learning Curve: </b> <br />
                The journey, however, wasn't paved with roses. Debugging cryptic
                errors, wrestling with unfamiliar APIs, and overcoming
                performance bottlenecks became commonplace. But every obstacle
                presented a valuable learning opportunity. I discovered the
                power of online communities, the magic of Stack Overflow, and
                the importance of perseverance in tackling technical roadblocks.
                These challenges not only sharpened my technical skills but also
                instilled in me the resilience and problem-solving skills that
                are essential for any aspiring developer.
              </p>
              <p>
                <b>Showcasing My Work: The Portfolio Powerhouse:</b> <br />I
                consider my portfolio my window to the world, a dynamic showcase
                of my skills and capabilities. It features a carefully curated
                selection of projects, each highlighting a different aspect of
                my full-stack prowess. From a weather app built with React and
                Node.js to a blog platform constructed with Express and MongoDB,
                each project tells a story of my growth and learning. My
                portfolio has been instrumental in securing freelance
                opportunities and connecting with potential employers, proving
                that sometimes, the best way to learn is to build!
              </p>
              <p>
                <b>Tech Crushes and Git Guru Secrets:</b> <br />
                If I had to pick favorites, React's component-based architecture
                and Node.js's versatility definitely steal the show. Their ease
                of use and powerful functionality make them indispensable tools
                in my development arsenal. And who can forget Git? This version
                control system is a developer's best friend, keeping track of
                every change and allowing me to collaborate seamlessly with
                others. Mastering Git workflows and utilizing its branching
                strategies have been game-changers, and I believe everyone
                should embrace its power!
              </p>
              <p>
                <b>Fellow Students, Let's Code Together! </b> <br />
                To my fellow students embarking on this incredible journey, I
                offer these words of advice: Embrace the challenges, never stop
                learning, and build, build, build! Online resources like
                TutorialsPoint and Coursera are fantastic companions, and
                communities like Reddit's r/webdev are always buzzing with
                helpful advice. Remember, time management is key – juggling
                academics and projects might seem daunting, but creating a
                schedule and prioritizing tasks can work wonders. Most
                importantly, don't be afraid to experiment, ask questions, and
                collaborate with others. The world of full-stack development is
                a collaborative space, and sharing knowledge and learning from
                each other is what makes it truly thrive.
              </p>
              <p>
                <b>The Future Beckons: </b> <br/>
                   As I stand on the precipice of graduation,
                my aspirations soar high. I dream of tackling complex enterprise
                applications, working on cutting-edge web technologies, and
                perhaps even building my own startup someday. The possibilities
                are endless, and I'm excited to see where this journey takes me
                next. This blog post is just the beginning of my online
                adventure. In the future, I hope to delve deeper into specific
                technologies, share project stories, and offer insights into the
                ever-evolving landscape of full-stack development. So, fellow
                adventurers, buckle up – the coding journey is just starting!
              </p>
              <button className="btn" onClick={() => toggleContent("about1")}>
                Show Less
              </button>
            </div>
          ) : (
            <div id="about1Short">
              <p>
                Navigating the World of Full-Stack Development: Insights from a
                Final Year Student Hey everyone, let me introduce myself - a
                final year student passionate about diving deep into the
                exhilarating world of full-stack development. While the journey
                hasn't been without its twists and turns, the thrill of building
                interactive applications and understanding the intricate dance
                between frontend and backend keeps me hooked!
              </p>
              <button className="btn" onClick={() => toggleContent("about1")}>
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
