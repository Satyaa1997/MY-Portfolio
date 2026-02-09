import "./Portfolio.css";
import ContactForm from "./ContactForm";

import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, NavDropdown, Nav} from "react-bootstrap";



export default function Portfolio() {
  return (
    <div className="portfolio">
      {/* ===== NAVBAR ===== */}
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            Satyam.dev
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
            <h3 className="project-card__title">Portfolio Website</h3>
            <p className="project-card__text">
              Single page portfolio built using React.
            </p>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">To-Do App</h3>
            <p className="project-card__text">
              Simple to-do application using React.
            </p>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">Portfolio Website</h3>
            <p className="project-card__text">
              Single page portfolio built using React.
            </p>
          </div>

          <div className="project-card">
            <h3 className="project-card__title">To-Do App</h3>
            <a href="https://github.com/Satyaa1997/TO-Do-Backend-">Get Structure</a>
            <p className="project-card__text">
              Simple to-do application using React.
            </p>
          </div>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "space-between" }}>
        <section className="section section--grey" id="contact">
          <h2 className="section__title">Contact</h2>
          <p className="section__text">Email: satyamrockindia@gmail.com</p>
          <p className="section__text">Mobile No.: 8601553699</p>
          <p className="section__text">Linkedin: </p>
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
