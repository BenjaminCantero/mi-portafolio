// src/components/About.jsx
import { motion } from "framer-motion";

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="sobre-mi" className="section about">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Sobre mí
        </motion.h2>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Texto principal */}
          <div className="about-text">
            <motion.p variants={itemVariants}>
              Soy <strong>Ingeniero Civil Informático</strong>, profundamente apasionado por el 
              desarrollo web y la creación de experiencias digitales interactivas de primer nivel.
            </motion.p>

            <motion.p variants={itemVariants}>
              Me especializo en el <strong>desarrollo Full Stack</strong> y el diseño de software basado 
              en buenas prácticas como <strong>Clean Code</strong>, arquitectura escalable y rendimiento optimizado.
            </motion.p>

            <motion.p variants={itemVariants}>
              Mi objetivo es buscar la excelencia en cada línea de código, integrando 
              tecnologías modernas como React, Node.js y un gran enfoque en el <strong>diseño UI/UX</strong>.
            </motion.p>
          </div>

          {/* Destacados */}
          <div className="about-highlights">
            <motion.div className="highlight-item" variants={itemVariants}>
              <h4>🎓 Educación</h4>
              <p>Ingeniería Civil Informática</p>
            </motion.div>

            <motion.div className="highlight-item" variants={itemVariants}>
              <h4>🚀 Intereses</h4>
              <p>Interfaces Modernas & Arquitectura Backend</p>
            </motion.div>

            <motion.div className="highlight-item" variants={itemVariants}>
              <h4>💡 Objetivo</h4>
              <p>Construir productos eficientes, disruptivos e interactivos</p>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;


