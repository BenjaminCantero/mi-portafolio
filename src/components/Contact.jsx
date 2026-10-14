// src/components/Contact.jsx
import { useState } from "react";
import Reveal from "./Reveal";

const EMAIL = "canteroalexander56@gmail.com";

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container">
      <Reveal className="contact-panel">
        <span className="eyebrow">Contacto</span>
        <h2 className="section-title">Hablemos.</h2>
        <p className="contact-lead">
          Abierto a prácticas, proyectos y colaboraciones. Respondo por correo.
        </p>

        <div className="contact-email">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <button type="button" className="copy-btn" onClick={handleCopyEmail} aria-live="polite">
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>

        <div className="actions contact-links">
          <a href="https://github.com/BenjaminCantero" target="_blank" rel="noreferrer" className="link-more">
            GitHub
          </a>
          <a href="https://linkedin.com/in/benjamín-alexander-cantero-garrido-7628b7321" target="_blank" rel="noreferrer" className="link-more">
            LinkedIn
          </a>
          <a href="/cv-benjamin-cantero.pdf" download className="link-more">
            Descargar CV
          </a>
        </div>
      </Reveal>
      </div>
    </section>
  );
}

export default Contact;
