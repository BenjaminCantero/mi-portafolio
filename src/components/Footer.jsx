// src/components/Footer.jsx
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Benjamín Cantero</h4>
          <p>Desarrollador Web / Estudiante Ing. Civil Informática</p>
        </div>
        
        <div className="footer-section">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#sobre-mi">Sobre mí</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Redes</h4>
          <ul>
            <li><a href="https://github.com/BenjaminCantero" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://twitter.com/tu_usuario" target="_blank" rel="noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {currentYear} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
