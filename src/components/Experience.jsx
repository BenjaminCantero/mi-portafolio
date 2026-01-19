// src/components/Experience.jsx
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Desarrollador Web Freelance",
      company: "Proyectos Independientes",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web modernas utilizando React, Node.js y bases de datos SQL/NoSQL. Colaboración con clientes para crear soluciones personalizadas y escalables.",
      achievements: [
        "Completé 5+ proyectos web con satisfacción del cliente del 100%",
        "Implementé APIs RESTful eficientes y seguras",
        "Optimizé el rendimiento de aplicaciones, reduciendo tiempos de carga en un 40%"
      ]
    },
    {
      title: "Desarrollador Backend",
      company: "Empresa Tech Startup",
      period: "2022 - 2023",
      description: "Trabajé en el desarrollo de microservicios con Python y FastAPI, integrando sistemas de terceros y gestionando bases de datos.",
      achievements: [
        "Desarrollé 3 microservicios que manejan 10k+ usuarios diarios",
        "Implementé autenticación JWT y autorización basada en roles",
        "Colaboré en equipo usando metodologías Agile"
      ]
    },
    {
      title: "Practicante en Desarrollo de Software",
      company: "Universidad Técnica",
      period: "2021 - 2022",
      description: "Participé en proyectos académicos y de investigación, aprendiendo tecnologías como Java, Spring Boot y bases de datos relacionales.",
      achievements: [
        "Contribuí al desarrollo de una aplicación educativa para estudiantes",
        "Aprendí principios de Clean Code y arquitectura de software",
        "Presenté resultados en conferencias universitarias"
      ]
    }
  ];

  return (
    <section id="experiencia" className="section experience">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experiencia Laboral
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Mi trayectoria profesional y logros
        </motion.p>

        <motion.div 
          className="experience-timeline"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="experience-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-company">{exp.company}</span>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;