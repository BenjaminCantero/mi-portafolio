// src/components/Projects.jsx
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
        <h2 className="section-title">Proyectos Destacados</h2>
        <p className="section-subtitle">Algunos de mis proyectos recientes</p>
        <div className="projects-grid">
          {displayProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
