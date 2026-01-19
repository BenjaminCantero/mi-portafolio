// src/components/Skills.jsx
import { motion } from "framer-motion";

function Skills() {

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Responsive Design",
      ]
    },
    {
      category: "Backend",
      skills: [
        "Python",
        "FastAPI",
        "Java",
        "Spring Boot",
        "MySQL",
        "REST API Development"
      ]
    },
    {
      category: "Herramientas y Entorno",
      skills: [
        "Git / GitHub",
        "Linux (Basico)",
        "VS Code",
        "npm / Yarn",
        "insomnia",
        "Figma / Trello"
      ]
    },
    {
      category: "Conceptos y Prácticas",
      skills: [
        "SOLID",
        "Clean Code",
        "Arquitectura REST",
        "Agile / Scrum",
        "Buenas prácticas de desarrollo"
      ]
    }
  ];

  return (
    <section id="habilidades" className="section skills">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Habilidades
        </motion.h2>

        <motion.div 
          className="skills-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-badge">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
