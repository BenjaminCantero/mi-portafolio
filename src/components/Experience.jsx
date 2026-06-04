// src/components/Experience.jsx
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Desarrollador Web Freelance",
      company: "Proyectos Independientes",
      period: "2023 – Presente",
      type: "Freelance",
      typeColor: "cyan",
      description: "Desarrollo de aplicaciones web modernas para clientes reales usando React, Node.js y bases de datos SQL/NoSQL. Gestión completa del ciclo de vida del producto.",
      achievements: [
        "Entregué 5+ proyectos web con satisfacción del 100% de los clientes",
        "Implementé APIs RESTful seguras con autenticación JWT",
        "Optimicé rendimiento reduciendo tiempos de carga en un 40%",
        "Diseñé interfaces responsivas con foco en UX"
      ],
      stack: ["React", "Node.js", "MySQL", "REST API"]
    },
    {
      title: "Desarrollador Backend",
      company: "Tech Startup",
      period: "2022 – 2023",
      type: "Part-time",
      typeColor: "indigo",
      description: "Desarrollo de microservicios con Python y FastAPI para una startup de tecnología. Integración de sistemas de terceros y gestión de bases de datos relacionales.",
      achievements: [
        "Desarrollé 3 microservicios que atienden 10k+ usuarios diarios",
        "Implementé autenticación JWT con roles y permisos granulares",
        "Colaboré en equipo usando Agile/Scrum con sprints de 2 semanas",
        "Reduje latencia de endpoints críticos en un 35%"
      ],
      stack: ["Python", "FastAPI", "MySQL", "Docker"]
    },
    {
      title: "Practicante – Desarrollo de Software",
      company: "Universidad Técnica",
      period: "2021 – 2022",
      type: "Práctica",
      typeColor: "purple",
      description: "Participé en proyectos académicos y de investigación aplicando Java, Spring Boot y bases de datos relacionales. Primer acercamiento formal a la ingeniería de software.",
      achievements: [
        "Contribuí al desarrollo de una aplicación educativa para 200+ estudiantes",
        "Apliqué principios SOLID y patrones de diseño en proyectos reales",
        "Presenté resultados técnicos en jornadas universitarias",
        "Documenté APIs con Swagger/OpenAPI"
      ],
      stack: ["Java", "Spring Boot", "SQL", "Git"]
    }
  ];

  return (
    <section id="experiencia" className="section experience">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-tag">// experiencia</span>
          <h2 className="section-title">Trayectoria Profesional</h2>
          <p className="section-subtitle">Mi camino como desarrollador y los logros alcanzados</p>
        </motion.div>

        <div className="experience-timeline">
          <div className="timeline-line" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience-item exp-side-${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline dot */}
              <div className={`timeline-dot dot-${exp.typeColor}`} />

              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-header-top">
                    <span className={`exp-type-badge badge-${exp.typeColor}`}>{exp.type}</span>
                    <span className="experience-period">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <span className="experience-company">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    {exp.company}
                  </span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      <span className="achievement-check">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="experience-stack">
                  {exp.stack.map((tech, i) => (
                    <span key={i} className={`exp-tech-badge tech-${exp.typeColor}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;