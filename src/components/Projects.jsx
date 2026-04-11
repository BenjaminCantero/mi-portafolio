// src/components/Projects.jsx
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

function Projects({ projects = [] }) {
  const defaultProjects = [
    {
      title: "Calculadora Binaria",
      description: "Este proyecto consiste en una calculadora de números binarios implementada completamente de forma manual, sin utilizar funciones automáticas de Python.",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="proyectos" className="section projects">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Proyectos Destacados
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Algunos de mis trabajos y herramientas recientes
        </motion.p>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
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

