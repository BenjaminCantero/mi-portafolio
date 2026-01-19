// src/components/About.jsx
import { motion } from "framer-motion";

function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre mí
        </motion.h2>

        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
          {/* Texto principal */}
          <div className="about-text">
            <p>
              Soy estudiante de <strong>Ingeniería Civil Informática</strong>, con interés en el 
              desarrollo web y la creación de aplicaciones móviles.
            </p>

            <p>
              Me apasiona el <strong>desarrollo Full Stack</strong> y el diseño de software basado 
              en buenas prácticas como <strong>Clean Code</strong> y una arquitectura clara y mantenible.
            </p>

            <p>
              Estoy constantemente aprendiendo nuevas tecnologías y buscando desafíos que me 
              permitan crecer como desarrollador tanto en entornos Web como Mobile.
            </p>
          </div>

          {/* Destacados */}
          <div className="about-highlights">
            <div className="highlight-item">
              <h4>🎓 Educación</h4>
              <p>Ingeniería Civil Informática</p>
            </div>

            <div className="highlight-item">
              <h4>🚀 Intereses</h4>
              <p>Desarrollo Web y Mobile Moderno</p>
            </div>

            <div className="highlight-item">
              <h4>💡 Objetivo</h4>
              <p>Construir software limpio, escalable y de calidad</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default About;


