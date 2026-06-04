// src/components/Footer.jsx
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/BenjaminCantero",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/benjamín-alexander-cantero-garrido-7628b7321",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      )
    },
    {
      name: "Email",
      href: "mailto:canteroalexander56@gmail.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      )
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Logo & tagline */}
        <div className="footer-brand">
          <a href="#inicio" className="footer-logo">
            <span className="logo-bracket">&lt;</span>BC<span className="logo-bracket">/&gt;</span>
          </a>
          <p className="footer-tagline">Construyendo el futuro,<br />una línea de código a la vez.</p>
          <div className="footer-social">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="footer-social-btn" title={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="footer-nav">
          <h4 className="footer-nav-title">Navegación</h4>
          <ul>
            {navLinks.map((link, i) => (
              <li key={i}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div className="footer-info">
          <h4 className="footer-nav-title">Contacto</h4>
          <p>canteroalexander56@gmail.com</p>
          <p>Chile 🇨🇱 – Disponible remoto</p>
          <a href="/cv-benjamin-cantero.pdf" download className="footer-cv-btn">
            ↓ Descargar CV
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {currentYear} <strong>Benjamín Cantero</strong>. Todos los derechos reservados.</p>
          <p className="footer-made-with">Hecho con ❤️ usando React + Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
