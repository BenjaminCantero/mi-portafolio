// src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";
import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const navItems = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Certificaciones", href: "#certificaciones" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const sectionIds = ["inicio", "proyectos", "certificaciones", "sobre-mi", "contacto"];

function App() {
  const [activeSection, setActiveSection] = useState("");

  // Marca la sección que cruza el centro del viewport para aria-current.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#contenido" className="skip-link">Saltar al contenido</a>

      <nav className="nav" aria-label="Principal">
        <div className="container nav-inner">
          <a
            href="#inicio"
            className="nav-brand"
            aria-current={activeSection === "inicio" ? "location" : undefined}
          >
            Benjamín Cantero
          </a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={activeSection === item.href.slice(1) ? "location" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main id="contenido" tabIndex={-1}>
        <Hero />
        <Projects />
        <Certifications />
        <About />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;
