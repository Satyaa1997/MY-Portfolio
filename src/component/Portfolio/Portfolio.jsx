import "./Portfolio.css";
import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Portfolio() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);

  const animateText = (ref, text, isHeading = false) => {
    const element = ref.current;

    if (!element) return;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let iteration = 0;

    const interval = setInterval(() => {
      const randomText = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";

          if (index < iteration) return char;

          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      if (isHeading) {
        const name = "Satyam Gond";
        const display = randomText.replace(
          name,
          `<span style="color:#0d6efd">${randomText.slice(
            randomText.indexOf(name),
            randomText.indexOf(name) + name.length,
          )}</span>`,
        );

        element.innerHTML = display;
      } else {
        element.innerText = randomText;
      }

      iteration += 0.3;

      if (iteration >= text.length) {
        clearInterval(interval);

        if (isHeading) {
          element.innerHTML = `Hi, I'm <span style="color:#0d6efd">Satyam Gond</span>`;
        } else {
          element.innerText = text;
        }
      }
    }, 30);
  };

  useEffect(() => {
    animateText(headingRef, "Hi, I'm Satyam Gond", true);
    animateText(paraRef, "Frontend Developer | React Developer");
  }, []);

  return (
    <div className="portfolio">
      {/* ===== NAVBAR ===== */}
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <img
              src="https://media.tenor.com/_sRq7f0tQLEAAAAM/reactjs.gif"
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== HERO HEADER ===== */}
      <header className="hero" id="home">
        <Container>
          <div className="hero-content">
            {/* LEFT CONTENT */}
            <div className="hero-text">
              <h1
                ref={headingRef}
                onMouseEnter={() =>
                  animateText(headingRef, "Hi, I'm Satyam Gond", true)
                }
              >
                Hi, I'm <span>Satyam Gond</span>
              </h1>

              <p
                ref={paraRef}
                onMouseEnter={() =>
                  animateText(paraRef, "Frontend Developer | React Developer")
                }
              >
                Frontend Developer | React Developer
              </p>

              <a href="#contact" className="hero-btn">
                Hire Me
              </a>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-image">
              <img src="/SKG.jpeg" alt="Satyam Gond" />
            </div>
          </div>
        </Container>
      </header>

      <section className="section about-card" id="about">
        <h2 className="section__title">About Me</h2>
        <p className="section__text">
          I am a passionate React developer. I like building simple, clean and
          user-friendly web applications. I am continuously learning new
          technologies.
        </p>
      </section>

      <section className="section section--grey skills-card" id="skills">
        <h2 className="section__title">Skills</h2>

        <div className="skills">
          <button className="skills__item">HTML</button>
          <button className="skills__item">CSS</button>
          <button className="skills__item">JavaScript</button>
          <button className="skills__item">React</button>
          <button className="skills__item">Git</button>
          <button className="skills__item">Nodejs</button>
          <button className="skills__item">Expressjs</button>
          <button className="skills__item">MongoDB</button>
        </div>
      </section>

   <section id="projects" className="bg-slate-100 py-20 px-6">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-14">
      My Projects
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {/* Taxi Booking */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 p-8 flex flex-col">

        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-3xl text-white mb-5">
          🚕
        </div>

        <h3 className="text-2xl font-bold text-black">
          Taxi Booking Design
        </h3>

        <span className="inline-block mt-3 w-fit bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
          HTML • CSS • Bootstrap
        </span>

        <p className="text-gray-600 mt-4 leading-7 flex-grow">
          Responsive online taxi booking landing page with modern UI and clean
          responsive layout.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href="https://satyaa1997.github.io/Interview1/"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            🌐 Live Demo
          </a>

          <a
            href="https://github.com/Satyaa1997/Interview1"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-black text-white px-5 py-2 rounded-lg font-medium transition"
          >
            💻 Source Code
          </a>
        </div>

      </div>

      {/* Book Library */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 p-8 flex flex-col">

        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-3xl text-white mb-5">
          📚
        </div>

        <h3 className="text-2xl font-bold text-black">
          Book Library MVC
        </h3>

        <span className="inline-block mt-3 w-fit bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full">
          Node • Express • MongoDB
        </span>

        <p className="text-gray-600 mt-4 leading-7 flex-grow">
          Full Stack Book Library application using MVC architecture with CRUD
          operations.
        </p>

        <div className="mt-6">
          <a
            href="https://github.com/Satyaa1997/BookLibrary-MVC-.git"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-black text-white px-5 py-2 rounded-lg font-medium transition"
          >
            💻 Source Code
          </a>
        </div>

      </div>

      {/* Instagram Reels */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 p-8 flex flex-col">

        <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-3xl text-white mb-5">
          🎬
        </div>

        <h3 className="text-2xl font-bold text-black">
          Instagram Reels UI
        </h3>

        <span className="inline-block mt-3 w-fit bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-2 rounded-full">
          HTML • CSS • JavaScript
        </span>

        <p className="text-gray-600 mt-4 leading-7 flex-grow">
          Instagram Reels UI clone with animations and responsive design.
        </p>

        <div className="mt-6">
          <a
            href="https://dom-project-exze.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            🌐 Live Demo
          </a>
        </div>

      </div>

      {/* Instagram Profile */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 p-8 flex flex-col">

        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-3xl text-white mb-5">
          📸
        </div>

        <h3 className="text-2xl font-bold text-black">
          Instagram Profile UI
        </h3>

        <span className="inline-block mt-3 w-fit bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">
          HTML • CSS • JavaScript
        </span>

        <p className="text-gray-600 mt-4 leading-7 flex-grow">
          Responsive Instagram Profile UI with a clean modern interface.
        </p>

        <div className="mt-6">
          <a
            href="https://dulcet-cocada-955eb5.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            🌐 Live Demo
          </a>
        </div>

      </div>

      {/* Apple Clone */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 p-8 flex flex-col">

        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-3xl text-white mb-5">
          🍎
        </div>

        <h3 className="text-2xl font-bold text-black">
          Apple Website Clone
        </h3>

        <span className="inline-block mt-3 w-fit bg-gray-200 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
          HTML • CSS • JavaScript
        </span>

        <p className="text-gray-600 mt-4 leading-7 flex-grow">
          Apple landing page clone with responsive layout and smooth UI.
        </p>

        <div className="mt-6">
          <a
            href="https://bright-mousse-41a04d.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            🌐 Live Demo
          </a>
        </div>

      </div>

      {/* Urban Spoon */}
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 p-8 flex flex-col">

        <div className="w-18 h-16 bg-orange-600 rounded-full flex items-center justify-center text-3xl text-white mb-5">
          🍽️
        </div>

        <h3 className="text-2xl font-bold text-black">
          Urban Spoon
        </h3>

        <span className="inline-block mt-3 w-fit bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full">
          React • Node • Express • MongoDB
        </span>

        <p className="text-gray-600 mt-4 leading-7 flex-grow">
          Restaurant Booking Application with authentication and booking
          system.
        </p>

        <div className="mt-6">
          <a
            href="https://restro-lyart-xi.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            🌐 Live Demo
          </a>
        </div>

      </div>

    </div>

  </div>
</section>
      <section className="section experience-section" id="experience">
  <h2 className="section__title">Experience & Certifications</h2>

  <div className="experience-grid">

    <div className="experience-card internship-card">
      <div className="card-icon">💼</div>

      <h3>Frontend Developer Intern</h3>

      <h5>CodeEnCaps</h5>

      <span className="duration">
        6 Months Internship
      </span>

      <p>
        Worked on HTML, CSS, Bootstrap, JavaScript, ReactJS,
        REST API, Node.js, Express.js and MongoDB.
        Developed responsive web applications and improved
        frontend development skills.
      </p>
    </div>

    <div className="experience-card certificate-card">
      <div className="card-icon">🏆</div>
      <h3>Frontend Development Intern</h3>
      <h5>Decodelabs</h5>
      <span className="duration">
        React Development
      </span>
      <p>
        Successfully completed Frontend Development training
        covering HTML, CSS, JavaScript, ReactJS and modern
        web development concepts.
      </p>
    </div>

  </div>
</section>

      <section className="contact-row">
        <section className="section section--grey " id="contact">
          <h2 className="section__title">Contact</h2>
          <p className="section__text">Email: satyamrockindia@gmail.com</p>
          <p className="section__text">Mobile No.: 8601553699</p>
          <p className="section__text">
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/satyam-gond-4b08b5227"
              target="_blank"
              rel="noreferrer"
            >
              www.linkedin.com/in/satyam-gond-4b08b5227
            </a>
          </p>
        </section>
        <section className="section section--grey contact-form-section">
          <h2 className="section__title">Send Your Details</h2>
          <ContactForm />
        </section>
      </section>

      <footer className="footer">
        <p>© 2026 Satyam Gond</p>
      </footer>
    </div>
  );
}
