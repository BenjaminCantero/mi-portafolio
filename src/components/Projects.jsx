// src/components/Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects({ projects = [] }) {
  const [filter, setFilter] = useState("Todos");

  const defaultProjects = [
    {
      title: "Sistema Logístico con Drones",
      description: "Plataforma web de visualización geoespacial para gestión autónoma de flotas de drones. Incluye API de integración con datos en tiempo real, dashboard analítico y módulo de toma de decisiones basado en historial.",
      technologies: ["Python", "FastAPI", "uvicorn", "Leaflet.js"],
      link: "https://github.com/BenjaminCantero/DronesSistem",
      category: "Backend",
      featured: true,
    },
    {
      title: "Analizador de Funciones Matemáticas",
      description: "Aplicación de escritorio para el análisis matemático completo: dominio, recorrido, intersecciones y evaluación paso a paso con visualización de gráficas en tiempo real.",
      technologies: ["Python", "Tkinter", "Matplotlib", "SymPy"],
      link: "https://github.com/BenjaminCantero/funciones",
      category: "Desktop",
      featured: false,
    },
    {
      title: "Calculadora Binaria",
      description: "Implementación manual de operaciones sobre números binarios en Python puro, sin usar funciones integradas. Proyecto demostrativo de comprensión profunda de lógica computacional.",
      technologies: ["Python 3.11"],
      link: "https://github.com/BenjaminCantero/calculadora_binario",
      category: "Algoritmos",
      featured: false,
    },
    {
      title: "Portafolio Personal",
      description: "Este mismo portafolio: aplicación React moderna con animaciones Framer Motion, diseño dark mode, secciones interactivas y rendimiento optimizado.",
      technologies: ["React", "Framer Motion", "Vite", "CSS3"],
      link: "https://github.com/BenjaminCantero",
      category: "Frontend",
      featured: true,
    },
  ];

  const categories = ["Todos", ...new Set(defaultProjects.map(p => p.category))];
  const displayProjects = projects.length > 0 ? projects : defaultProjects;
  const filtered = filter === "Todos"
    ? displayProjects
    : displayProjects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="proyectos" className="section projects">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-tag">// proyectos</span>
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">Soluciones que he construido — código real, impacto real</p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="projects-filters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`filter-btn ${filter === cat ? "filter-btn-active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          key={filter}
        >
          {filtered.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
                featured={project.featured}
                category={project.category}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>¿Quieres ver más trabajo?</p>
          <a
            href="https://github.com/BenjaminCantero"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            Ver GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
