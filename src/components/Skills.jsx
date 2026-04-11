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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="habilidades" className="section skills">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Habilidades
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category"
              variants={itemVariants}
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

