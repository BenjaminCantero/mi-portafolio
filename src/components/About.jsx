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

  const highlights = [
    {
      icon: "🎓",
      title: "Educación",
      value: "Ing. Civil Informática",
      detail: "Universidad Técnica"
    },
    {
      icon: "💻",
      title: "Especialidad",
      value: "Full Stack Developer",
      detail: "React · Node.js · Python"
    },
    {
      icon: "🚀",
      title: "Intereses",
      value: "UI/UX & Arquitectura",
      detail: "Software escalable y moderno"
    },
    {
      icon: "📍",
      title: "Ubicación",
      value: "Chile",
      detail: "Disponible remoto / presencial"
    }
  ];

  const values = [
    { icon: "⚡", text: "Código limpio y eficiente" },
    { icon: "🔍", text: "Atención al detalle" },
    { icon: "🤝", text: "Trabajo colaborativo" },
    { icon: "📈", text: "Mejora continua" },
  ];

  return (
    <section id="sobre-mi" className="section about">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-tag">// sobre mí</span>
          <h2 className="section-title">¿Quién soy?</h2>
          <p className="section-subtitle">Un desarrollador apasionado por crear experiencias digitales impactantes</p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Texto principal */}
          <div className="about-text-block">
            <motion.p variants={itemVariants}>
              Soy <strong>Ingeniero Civil Informático</strong> con profunda pasión por el
              desarrollo web y la creación de experiencias digitales modernas. Me especializo
              en construir productos que combinan rendimiento técnico con diseño excepcional.
            </motion.p>

            <motion.p variants={itemVariants}>
              Mi enfoque está en el <strong>desarrollo Full Stack</strong> aplicando
              principios de <strong>Clean Code</strong>, arquitecturas escalables y
              buenas prácticas de ingeniería de software. Disfruto cada fase del proceso:
              desde el diseño de la arquitectura hasta los últimos detalles de la UI.
            </motion.p>

            <motion.p variants={itemVariants}>
              Creo firmemente que el mejor código es aquel que es legible, mantenible y
              entrega valor real. Siempre busco aprender nuevas tecnologías y aplicar
              soluciones <strong>creativas a problemas complejos</strong>.
            </motion.p>

            {/* Valores */}
            <motion.div className="about-values" variants={itemVariants}>
              {values.map((v, i) => (
                <div key={i} className="about-value-chip">
                  <span>{v.icon}</span> {v.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Cards de destacados */}
          <div className="about-highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <div className="highlight-body">
                  <span className="highlight-title">{item.title}</span>
                  <strong className="highlight-value">{item.value}</strong>
                  <span className="highlight-detail">{item.detail}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
