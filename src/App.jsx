// src/App.jsx
import "./App.css";
import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const navItems = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <nav className="nav" aria-label="Principal">
        <div className="container nav-inner">
          <a href="#inicio" className="nav-brand">Benjamín Cantero</a>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}

export default App;
