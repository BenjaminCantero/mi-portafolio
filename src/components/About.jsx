// src/components/About.jsx
function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="section-container">
        <h2 className="section-title">Sobre mí</h2>

        <div className="about-content">
          
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

        </div>
      </div>
    </section>
  );
}

export default About;


