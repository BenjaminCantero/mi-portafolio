// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import avatarImg from "../assets/avatar.png";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const roles = [
    "Desarrollador Full Stack",
    "Ingeniero Civil Informático",
    "UI/UX Enthusiast",
    "Backend Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex(r => (r + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stats = [
    { value: "5+", label: "Proyectos" },
    { value: "3+", label: "Años exp." },
    { value: "100%", label: "Satisfacción" },
  ];

  return (
    <header id="inicio" className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="blob-cyan" />
        <div className="blob-indigo" />
        <div className="blob-purple" />
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }} />
          ))}
        </div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-dot" />
            Disponible para trabajar
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hola, soy <br />
            <span className="hero-name">Benjamín Cantero</span>
          </motion.h1>

          <motion.div className="hero-role-wrapper" variants={itemVariants}>
            <span className="hero-role-prefix">&gt; </span>
            <span className="hero-role-typed">{typedText}</span>
            <span className="hero-cursor">|</span>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Ingeniero Civil Informático especializado en construir aplicaciones web
            modernas, escalables y con experiencias de usuario excepcionales.
            Apasionado por el código limpio y las arquitecturas bien diseñadas.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#proyectos" className="btn btn-primary">
              <span>Ver proyectos</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contactarme
            </a>
            <a href="/cv-benjamin-cantero.pdf" className="btn btn-ghost" download>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/></svg>
              Descargar CV
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero-stats" variants={itemVariants}>
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="avatar-ring-outer">
            <div className="avatar-ring-inner">
              <div className="avatar-wrapper">
                <img src={avatarImg} alt="Benjamín Cantero" />
              </div>
            </div>
          </div>

          {/* Floating tech badges */}
          <motion.div
            className="tech-float tech-float-1"
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            ⚛️ React
          </motion.div>
          <motion.div
            className="tech-float tech-float-2"
            animate={{ y: [6, -6, 6] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            🐍 Python
          </motion.div>
          <motion.div
            className="tech-float tech-float-3"
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            ☕ Java
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#sobre-mi">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Scroll</span>
        </a>
      </motion.div>
    </header>
  );
}

export default Hero;
