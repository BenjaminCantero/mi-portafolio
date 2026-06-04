// src/components/Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("canteroalexander56@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      label: "Email",
      value: "canteroalexander56@gmail.com",
      href: "mailto:canteroalexander56@gmail.com",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      ),
      color: "cyan",
      action: handleCopyEmail
    },
    {
      label: "GitHub",
      value: "github.com/BenjaminCantero",
      href: "https://github.com/BenjaminCantero",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      ),
      color: "indigo",
    },
    {
      label: "LinkedIn",
      value: "Benjamín Cantero Garrido",
      href: "https://linkedin.com/in/benjamín-alexander-cantero-garrido-7628b7321",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      ),
      color: "blue",
    }
  ];

  return (
    <section id="contacto" className="section contact">
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">// contacto</span>
          <h2 className="section-title">Hablemos</h2>
          <p className="section-subtitle">¿Tienes un proyecto en mente? Estoy listo para colaborar</p>
        </motion.div>

        <div className="contact-content">
          {/* Texto CTA */}
          <motion.div
            className="contact-cta-block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="contact-availability">
              <span className="avail-dot" />
              <span>Disponible para trabajar</span>
            </div>
            <h3 className="contact-heading">
              Construyamos algo <span className="highlight-text">increíble</span> juntos
            </h3>
            <p className="contact-body">
              Estoy abierto a oportunidades laborales, proyectos freelance y colaboraciones
              interesantes. Si crees que podríamos trabajar bien juntos, no dudes en escribirme.
            </p>
            <a href="mailto:canteroalexander56@gmail.com" className="btn btn-primary contact-primary-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Enviar mensaje
            </a>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            className="contact-list"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                className={`contact-item contact-item-${contact.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
              >
                <a
                  href={contact.href}
                  target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="contact-item-inner"
                >
                  <div className={`contact-icon-wrap icon-${contact.color}`}>
                    {contact.icon}
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">{contact.label}</span>
                    <span className="contact-value">{contact.value}</span>
                  </div>
                  <svg className="contact-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                {contact.action && (
                  <button className="contact-copy-btn" onClick={contact.action} title="Copiar email">
                    {copied ? "✓" : "⎘"}
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
