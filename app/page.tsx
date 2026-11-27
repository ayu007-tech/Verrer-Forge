"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    description:
      "Purpose-built software solutions designed around your business processes, customers, and long-term goals.",
    tags: ["Web Applications", "Backend Systems", "API Development"],
  },
  {
    number: "02",
    title: "Cloud & DevOps Engineering",
    description:
      "Build reliable cloud infrastructure, automate deployments, and create scalable environments for modern applications.",
    tags: ["AWS", "CI/CD", "Docker", "Infrastructure as Code"],
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "Bring practical AI capabilities into business workflows, products, and internal systems.",
    tags: ["AI Integrations", "LLM Solutions", "Intelligent Workflows"],
  },
  {
    number: "04",
    title: "Workflow Automation",
    description:
      "Reduce repetitive work and connect business tools through streamlined, automated processes.",
    tags: ["Process Automation", "System Integration", " n8n"],
  },
];

const projects = [
  {
    number: "01",
    category: "IoT · Cloud · Monitoring",
    title: "Cold Chain Monitoring",
    description:
      "A monitoring prototype designed to track environmental conditions and location data, with cloud-based storage and alert capabilities.",
    technologies: ["ESP32", "FastAPI", "Firestore", "GPS"],
    status: "Prototype",
  },
  {
    number: "02",
    category: "Java · Systems · Analytics",
    title: "LogWatch",
    description:
      "A Java-based log analysis tool concept for reviewing application logs, identifying errors, filtering events, and generating reports.",
    technologies: ["Java", "Linux", "MySQL", "Docker"],
    status: "Portfolio Project",
  },
  {
    number: "03",
    category: "Cloud · DevOps · Automation",
    title: "AWS Infrastructure & CI/CD",
    description:
      "A reproducible cloud infrastructure and deployment workflow using infrastructure as code and automated build pipelines.",
    technologies: ["AWS", "Terraform", "Docker", "GitHub Actions"],
    status: "Portfolio Project",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your objectives, challenges, users, and technical requirements.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We define the solution, technical direction, scope, and implementation roadmap.",
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "We build, test, and refine the solution with a focus on quality and reliability.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We support deployment, handover, and the next stage of your product's growth.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Custom Software Development",
    message: "",
  });

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Project enquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nProject details:\n${form.message}`
    );

    window.location.href = `mailto:verrar.forge@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img
              src="/verrar-logo.png"
              alt="Verrar Forge Software Solutions"
              className="brand-logo"
            />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#work" onClick={closeMenu}>Our Work</a>
            <a href="#process" onClick={closeMenu}>Approach</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Start a Project <span>↗</span>
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="container hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            INDEPENDENT SOFTWARE & TECHNOLOGY CONSULTANCY
          </div>

          <h1>
            Engineering the
            <br />
            next generation of
            <br />
            <span>digital business.</span>
          </h1>

          <p className="hero-description">
            We bring software engineering, cloud infrastructure, and applied
            AI together to help businesses build, automate, and scale with
            confidence.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Discuss Your Project <span>↗</span>
            </a>
            <a href="#services" className="button button-secondary">
              Explore Capabilities <span>↓</span>
            </a>
          </div>

          <div className="hero-footnote">
            <span>SOFTWARE ENGINEERING</span>
            <span className="footnote-line" />
            <span>CLOUD & AI</span>
            <span className="footnote-line" />
            <span>BUSINESS AUTOMATION</span>
          </div>
        </div>

        <div className="hero-index">VF / 001</div>
      </section>

      <section className="intro-section section" id="about">
        <div className="container intro-grid">
          <div>
            <div className="section-kicker">01 — WHO WE ARE</div>
            <h2 className="section-heading">
              Technology should move
              <br />
              <span>business forward.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Verrar Forge is an independent technology consultancy focused
              on engineering practical digital solutions for modern
              businesses.
            </p>
            <p>
              From custom software and cloud infrastructure to AI
              integrations and workflow automation, our focus is on turning
              complex technical challenges into dependable solutions.
            </p>
            <a className="text-link" href="#contact">
              Let's build something meaningful <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="services-section section" id="services">
        <div className="container">
          <div className="section-topline">
            <div>
              <div className="section-kicker">02 — WHAT WE DO</div>
              <h2 className="section-heading">
                Engineering capabilities.
                <br />
                <span>Business possibilities.</span>
              </h2>
            </div>
            <p className="section-side-copy">
              Focused technical capabilities to help turn ideas into
              functional, scalable digital systems.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="card-number">{service.number}</span>
                  <span className="card-arrow">↗</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tag-list">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section" id="work">
        <div className="container">
          <div className="section-topline">
            <div>
              <div className="section-kicker">03 — SELECTED WORK</div>
              <h2 className="section-heading">
                Ideas engineered
                <br />
                <span>into working concepts.</span>
              </h2>
            </div>
            <p className="section-side-copy">
              A selection of technical projects demonstrating our
              engineering interests and capabilities.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-row" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
                <div className="project-status">{project.status}</div>
              </article>
            ))}
          </div>

          <p className="portfolio-note">
            These are portfolio projects and prototypes, not representations
            of completed client engagements.
          </p>
        </div>
      </section>

      <section className="approach-section section" id="process">
        <div className="container">
          <div className="section-kicker">04 — HOW WE WORK</div>
          <div className="section-topline approach-heading">
            <h2 className="section-heading">
              Clear thinking.
              <br />
              <span>Disciplined execution.</span>
            </h2>
            <p className="section-side-copy">
              A structured approach that keeps the work aligned with your
              objectives, from the first conversation to delivery.
            </p>
          </div>

          <div className="process-grid">
            {process.map((item) => (
              <article className="process-card" key={item.number}>
                <span className="process-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <div className="section-kicker">05 — LET'S CONNECT</div>
            <h2 className="section-heading">
              Have a challenge
              <br />
              worth <span>engineering?</span>
            </h2>
            <p>
              Tell us what you're working on. Let's explore how the right
              technology can move your business forward.
            </p>

            <div className="contact-details">
              <div>
                <span className="detail-label">EMAIL</span>
                <a href="mailto:verrar.forge@gmail.com">
                  verrar.forge@gmail.com
                </a>
              </div>
              <div>
                <span className="detail-label">PHONE / WHATSAPP</span>
                <a href="https://wa.me/917028711586" target="_blank" rel="noreferrer">
                  +91 70287 11586 ↗
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading">PROJECT ENQUIRY</div>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <label htmlFor="email">Business email</label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />

            <label htmlFor="service">What do you need?</label>
            <select
              id="service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
            >
              {services.map((service) => (
                <option key={service.number} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other / Not sure yet">Other / Not sure yet</option>
            </select>

            <label htmlFor="message">Tell us about your project</label>
            <textarea
              id="message"
              rows={4}
              placeholder="A brief overview of your idea, challenge, or requirements..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />

            <button className="button button-primary submit-button" type="submit">
              Send Project Enquiry <span>↗</span>
            </button>
            <p className="form-note">
              This opens your email application with your enquiry prepared.
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <a href="#home" className="footer-brand">
              <img src="/verrar-logo.png" alt="Verrar Forge" />
            </a>
            <p>
              Engineering the next generation
              <br />
              of digital business.
            </p>
            <a className="back-top" href="#home">
              BACK TO TOP ↑
            </a>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} VERRAR FORGE</span>
            <span>SOFTWARE SOLUTIONS</span>
            <a href="mailto:verrar.forge@gmail.com">
              GET IN TOUCH ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}