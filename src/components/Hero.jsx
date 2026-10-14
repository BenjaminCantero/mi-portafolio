// src/components/Hero.jsx
import Reveal from "./Reveal";
import avatarImg from "../assets/avatar.png";

function Hero() {
  return (
    <header id="inicio" className="hero">
      <div className="container">
        <Reveal>
          <a href="#proyectos" className="hero-pill">
            <span className="hero-pill-dot" />
            Ahora construyendo FullFragrance
          </a>
          <h1 className="hero-title">
            Construyo aplicaciones web
            <span className="secondary"> de la base de datos a la interfaz.</span>
          </h1>
        </Reveal>

        <Reveal className="hero-bottom" delay={0.12}>
          <div className="hero-person">
            <img src={avatarImg} alt="" className="hero-avatar" width="56" height="56" />
            <div>
              <strong>Benjamín Cantero</strong>
              <span>Estudiante de Ingeniería Civil Informática · Chile</span>
            </div>
          </div>
          <div className="actions">
            <a href="#proyectos" className="btn">Ver proyectos</a>
            <a href="#contacto" className="link-more">Contacto</a>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

export default Hero;
