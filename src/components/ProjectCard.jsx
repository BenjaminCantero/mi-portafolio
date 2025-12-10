// src/components/ProjectCard.jsx
function ProjectCard({ title, description, technologies = [], link }) {
  return (
    <article className="project-card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="card-icon">→</span>
      </div>
      
      <p className="card-description">{description}</p>
      
      {technologies && technologies.length > 0 && (
        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      )}
      
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="card-link">
          Ver proyecto
          <span className="link-icon">↗</span>
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
