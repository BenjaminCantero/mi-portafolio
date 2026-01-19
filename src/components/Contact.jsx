// src/components/Contact.jsx
import { motion } from "framer-motion";

function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "canteroalexander56@gmail.com",
      href: "mailto:canteroalexander56@gmail.com",
      icon: "✉️"
    },
    {
      label: "GitHub",
      value: "github.com/BenjaminCantero",
      href: "https://github.com/BenjaminCantero",
      icon: "👉"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/tu_usuario",
      href: "https://linkedin.com/in/tu_usuario",
      icon: "💼"
    }
  ];

  return (
    <section id="contacto" className="section contact">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contacto
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          ¿Quieres conectar? Aquí me encuentras
        </motion.p>
        
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="contact-text">
            <p>
              Estoy disponible para colaboraciones, proyectos interesantes o simplemente para conversar 
              sobre desarrollo web y tecnología.
            </p>
            <p className="contact-cta">¡No dudes en contactarme!</p>
          </div>
          
          <div className="contact-list">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="contact-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="contact-icon">{contact.icon}</span>
                <div className="contact-info">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
