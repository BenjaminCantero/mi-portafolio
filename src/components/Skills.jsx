// src/components/Skills.jsx
import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      color: "cyan",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript ES6+", level: 88 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "Responsive Design", level: 85 },
        { name: "Framer Motion", level: 75 },
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "indigo",
      skills: [
        { name: "Python", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Java", level: 78 },
        { name: "Spring Boot", level: 72 },
        { name: "REST APIs", level: 88 },
      ]
    },
    {
      category: "Base de Datos",
      icon: "🗄️",
      color: "purple",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "SQLite", level: 78 },
        { name: "SQL Relacional", level: 82 },
      ]
    },
    {
      category: "Herramientas",
      icon: "🛠️",
      color: "emerald",
      skills: [
        { name: "Git / GitHub", level: 88 },
        { name: "Linux", level: 70 },
        { name: "Figma", level: 72 },
        { name: "Agile / Scrum", level: 78 },
        { name: "Clean Code / SOLID", level: 82 },
      ]
    }
  ];

  const techIcons = [
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "FastAPI", icon: "⚡" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Git", icon: "🔀" },
    { name: "Linux", icon: "🐧" },
    { name: "Figma", icon: "🎨" },
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
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-tag">// habilidades</span>
          <h2 className="section-title">Stack Técnico</h2>
          <p className="section-subtitle">Tecnologías y herramientas con las que trabajo</p>
        </motion.div>

        {/* Tech icons marquee */}
        <div className="tech-marquee">
          <div className="tech-marquee-track">
            {[...techIcons, ...techIcons].map((tech, i) => (
              <div key={i} className="tech-marquee-item">
                <span className="tech-marquee-icon">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

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
              className={`skill-category skill-category-${category.color}`}
              variants={itemVariants}
            >
              <div className="skill-category-header">
                <span className="skill-category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="skill-bars">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-bar-item">
                    <div className="skill-bar-header">
                      <span className="skill-bar-name">{skill.name}</span>
                      <span className="skill-bar-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className={`skill-bar-fill skill-bar-fill-${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
