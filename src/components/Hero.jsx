// src/components/Hero.jsx
import Reveal from "./Reveal";
import avatarImg from "../assets/avatar.png";

function Hero() {
  return (
    <header id="inicio" className="hero">
      <div className="container">
        <Reveal>
          <a href="#sobre-mi" className="hero-pill">
            <span className="hero-pill-dot" />
            Disponible para trabajar
          </a>
          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-title">
            Benjamín Cantero
            <span className="secondary"> Desarrollador Full Stack</span>
          </h1>
          <p className="hero-lead">
            Ingeniero Civil Informático especializado en construir aplicaciones
            web modernas, escalables y con experiencias de usuario excepcionales.
            Apasionado por el código limpio y las arquitecturas bien diseñadas.
          </p>
        </Reveal>

        <Reveal className="hero-bottom" delay={0.12}>
          <div className="hero-person">
            <img src={avatarImg} alt="" className="hero-avatar" width="56" height="56" />
            <div>
              <strong>Benjamín Cantero</strong>
              <span>Ingeniero Civil Informático · Chile</span>
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
