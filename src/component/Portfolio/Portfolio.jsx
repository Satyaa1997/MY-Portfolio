import "./Portfolio.css";
import ContactForm from "./ContactForm";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav } from "react-bootstrap";

export default function Portfolio() {
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
              <h1>
                Hi, I’m <span>Satyam Gond</span>
              </h1>
              <p>Frontend Developer | React Developer</p>

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

      <section className="section" id="projects">
        <h2 className="section__title">Projects</h2>

        <div className="projects">
          <div className="project-card">
            <h3 className="project-card__title">Taxi Booking Design</h3>
            <p className="project-card__text">Online taxi booking UI design.</p>
            <a
              href="https://satyaa1997.github.io/Interview1/"
              target="_blank"
              rel="noreferrer"
            >
              Open Website
            </a>
             <p className="project-card__text">PhotoShoot WebPage</p>
             <a
              href="https://stupendous-faloodeh-3eef42.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Open Website
            </a>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">Book library Project</h3>
            <p className="project-card__text">
              Book library Project(MVC structure)
            </p>
            <a href="https://github.com/Satyaa1997/BookLibrary-MVC-.git">
            View Project</a>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">Instagram Reels </h3>
            <p className="project-card__text">
             Instagram Reels UI design using HTML,CSS and JavaScript.
            </p>
            <a href="https://dom-project-exze.vercel.app/">View Project</a>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">Instagram Profile </h3>
            <p className="project-card__text">
             Instagram Profile Page UI design using HTML,CSS and JavaScript.
            </p>
            <a
              href="https://dulcet-cocada-955eb5.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
        <div className="projects">
          <div className="project-card">
            <h3 className="project-card__title">Some Pages Design's</h3>

            <ul className="project-links">
              <li>
                <a
                  href="https://htmlexampl.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 Live Website
                </a>
              </li>
              <li>
                <a
                  href="https://bright-mousse-41a04d.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 Live Webpage Apple
                </a>
              </li>
              <li>
                <a
                  href="https://bright-mousse-41a04d.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗 Live Webpage Apple
                </a>
              </li>
            </ul>

            <p className="project-card__text">
              This is a collection of some pages design's using HTML and CSS. I
              have designed some pages like Apple website etc.
            </p>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">Restro Booking App</h3>
            <p className="project-card__text">
              Urban Spoon (Restaurant Booking)
            </p>
            <a href="https://restro-lyart-xi.vercel.app/">View Project</a>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">Portfolio Website</h3>
            <p className="project-card__text">
              Single page portfolio built using React.
            </p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">Backend Structure</h3>
            <p className="project-card__text">
              Node + Express backend project.
            </p>
            <a
              href="https://github.com/Satyaa1997/TO-Do-Backend-"
              target="_blank"
              rel="noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </section>

      <section className="contact-row">
        <section className="section section--grey" id="contact">
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
        <section className="section section--grey">
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
