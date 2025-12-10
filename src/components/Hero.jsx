// src/components/Hero.jsx
function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Benjamín Cantero</h1>
          <p className="hero-subtitle">Desarrollador Web Full Stack</p>
          <p className="hero-description">
            Estudiante de Ingeniería Civil Informática apasionado por crear 
            aplicaciones web modernas, escalables y con excelente experiencia de usuario.
          </p>
          <div className="hero-buttons">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contactarme
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="avatar">
            <span>BC</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
