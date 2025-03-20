import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles/main.css'; // make sure your CSS is imported

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <header>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <BootstrapNavbar expand="lg" className="sticky-top" style={{ backgroundColor: darkMode ? '#333' : '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <Container>
        <BootstrapNavbar.Brand href="#">
          <i className="fas fa-user-astronaut"></i> [Your Name]
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ml-auto align-items-center">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="link" onClick={toggleDarkMode} style={{ fontSize: '1.5rem', color: darkMode ? '#f8f9fa' : '#333' }} title="Toggle Dark Mode">
              {darkMode ? '🌙' : '☀️'}
            </Button>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;

import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion'; // if you have installed framer-motion by: npm install framer-motion

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero"
      style={{
        backgroundImage: 'url(/path/to/hero-image.jpg)', // update with your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Row>
          <Col className="text-center">
            <h1 style={{ color: '#fff', fontSize: '48px', fontWeight: 'bold' }}>
              Hi, I’m [Your Name] – A Passionate Web Developer
            </h1>
            <p style={{ color: '#fff', fontSize: '24px' }}>
              Welcome to my portfolio showcasing my projects and skills.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

const Projects = () => {
  // Replace the below projects array with your actual project data
  const projects = [
    { title: 'Project Title 1', description: 'Short description of the project.', image: '/path/to/project1.jpg' },
    { title: 'Project Title 2', description: 'Short description of the project.', image: '/path/to/project2.jpg' },
    { title: 'Project Title 3', description: 'Short description of the project.', image: '/path/to/project3.jpg' },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} style={{ marginBottom: '20px' }}>
              <Card className="project-card" style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', transition: 'transform 0.3s' }}>
                <Card.Img variant="top" src={project.image} alt={project.title} style={{ height: '200px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title style={{ fontSize: '20px', fontWeight: 'bold' }}>{project.title}</Card.Title>
                  <Card.Text style={{ fontSize: '16px' }}>{project.description}</Card.Text>
                  <Button variant="primary" style={{ backgroundColor: '#4A90E2', border: 'none' }}>View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>About Me</h2>
        <Row>
          <Col md={4}>
            <img
              src="/path/to/your-photo.jpg" // update with your headshot
              alt="Your Name"
              style={{ width: '100%', borderRadius: '50%', border: '5px solid #4A90E2' }}
            />
          </Col>
          <Col md={8}>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Hi, I’m [Your Name], a passionate web developer with experience in [list your skills]. I love creating beautiful and functional websites that provide a great user experience.
            </p>
            <h3 style={{ marginTop: '30px' }}>Skills</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><strong>HTML5</strong> - Proficient</li>
              <li style={{ marginBottom: '10px' }}><strong>CSS3</strong> - Proficient</li>
              <li style={{ marginBottom: '10px' }}><strong>JavaScript</strong> - Intermediate</li>
              <li style={{ marginBottom: '10px' }}><strong>React</strong> - Intermediate</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Contact</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit" style={{ backgroundColor: '#4A90E2', border: 'none', marginTop: '20px' }}>
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h3>Get in Touch</h3>
            <p>You can also reach me via:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="mailto:your.email@example.com" style={{ color: '#4A90E2' }}>your.email@example.com</a></li>
              <li><a href="https://linkedin.com/in/yourprofile" style={{ color: '#4A90E2' }}>LinkedIn</a></li>
              <li><a href="https://github.com/yourusername" style={{ color: '#4A90E2' }}>GitHub</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', marginTop: '40px' }}>
      <Container>
        <p style={{ textAlign: 'center', margin: 0 }}>&copy; 2025 [Your Name]. All rights reserved.</p>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="https://linkedin.com/in/yourprofile" style={{ color: '#fff', margin: '0 10px' }}>LinkedIn</a>
          <a href="https://github.com/yourusername" style={{ color: '#fff', margin: '0 10px' }}>GitHub</a>
          <a href="https://x.com/yourusername" style={{ color: '#fff', margin: '0 10px' }}>X</a>
        </div>
      </Container>
    </footer>
  );
};

export default Hero;
export { Projects, About, Contact, Footer };

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}