// src/components/Projects.jsx
import ProjectCard from "./ProjectCard";

function Projects({ projects = [] }) {
  const defaultProjects = [
    {
      title: "Portafolio Personal",
      description: "Sitio web personal para mostrar proyectos y habilidades. Desarrollado con React y CSS moderno.",
      technologies: ["React", "JavaScript", "CSS3"],
      link: "https://github.com"
    },
    {
      title: "Aplicación de Tareas",
      description: "Aplicación web para gestionar tareas diarias con interfaz intuitiva y almacenamiento local.",
      technologies: ["React", "localStorage", "CSS"],
      link: "https://github.com"
    },
    {
      title: "Página de Inicio",
      description: "Landing page responsiva para startup tecnológica con diseño moderno y conversión optimizada.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com"
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
