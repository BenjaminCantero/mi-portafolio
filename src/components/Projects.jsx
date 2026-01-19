// src/components/Projects.jsx
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects({ projects = [] }) {
  const defaultProjects = [
    {
      title: "Calculadora Binaria",
      description: "Este proyecto consiste en una calculadora de números binarios implementada completamente de forma manual, sin utilizar funciones automáticas de Python como bin(), int() con base 2 o similares.",
      technologies: ["Python 3.11"],
      link: "https://github.com/BenjaminCantero/calculadora_binario"
    },
    {
      title: "Sistema Logístico Autónomo con Drones",
      description: "Web de visualización geoespacial realista, con una API de integración externa y herramientas para toma de decisiones basadas en datos históricos.",
      technologies: ["Python", "FastAPI", "uvicorn"],
      link: "https://github.com/BenjaminCantero/DronesSistem"
    },
    {
      title: "Analizador de funciones matemáticas",
      description: "Aplicación de funciones para realizar el cálculo de dominio, recorrido, intersecciones y evaluación paso a paso.",
      technologies: ["Tkinter", "Matplotlib", "SymPy", "Python"],
      link: "https://github.com/BenjaminCantero/funciones"
    }
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <section id="proyectos" className="section projects">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Proyectos Destacados
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Algunos de mis proyectos recientes
        </motion.p>
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {displayProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                link={project.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
