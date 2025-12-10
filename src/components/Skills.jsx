// src/components/Skills.jsx
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
        <h2 className="section-title">Habilidades</h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <span className="skill-badge">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
