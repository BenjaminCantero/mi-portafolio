// src/components/ProjectCard.jsx
import { motion } from "framer-motion";

function ProjectCard({ title, description, technologies = [], link, featured, category }) {
  return (
    <motion.article
      className={`project-card ${featured ? "project-card-featured" : ""}`}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      {featured && (
        <div className="project-featured-badge">
          <span>⭐ Destacado</span>
        </div>
      )}

      <div className="card-header">
        <div className="card-folder-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
          </svg>
        </div>
        <div className="card-actions">
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="card-action-btn" title="Ver repositorio">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          )}
          <a href={link || "#"} target="_blank" rel="noreferrer" className="card-action-btn" title="Ver proyecto">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      </div>

      {category && (
        <span className="card-category">{category}</span>
      )}

      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      {technologies && technologies.length > 0 && (
        <div className="card-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default ProjectCard;
