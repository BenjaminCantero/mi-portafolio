// src/components/About.jsx
import Reveal from "./Reveal";

const stack = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Flutter"] },
  { label: "Backend", items: ["Node.js", "Express", "Python", "FastAPI", "Java"] },
  { label: "Datos y herramientas", items: ["PostgreSQL", "MySQL", "Prisma", "Git", "Linux"] },
];

const values = [
  { icon: "⚡", title: "Código limpio y eficiente", text: "Aplico principios de Clean Code para escribir software legible, mantenible y que entrega valor real." },
  { icon: "🔍", title: "Atención al detalle", text: "Desde la arquitectura hasta los últimos detalles de la UI, cada píxel y cada línea importan." },
  { icon: "🤝", title: "Trabajo colaborativo", text: "Creo que los mejores productos nacen de equipos que comparten decisiones y conocimiento." },
  { icon: "📈", title: "Mejora continua", text: "Siempre busco aprender nuevas tecnologías y aplicar soluciones creativas a problemas complejos." },
];

const infoCards = [
  { icon: "🎓", label: "Educación", title: "Ing. Civil Informática", detail: "Universidad Catolica de Temuco" },
  { icon: "💻", label: "Especialidad", title: "Full Stack Developer", detail: "React · Node.js · Python" },
  { icon: "🚀", label: "Intereses", title: "UI/UX & Arquitectura", detail: "Software escalable y moderno" },
  { icon: "📍", label: "Ubicación", title: "Chile", detail: "Disponible remoto / presencial" },
];

function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Sobre mí</span>
          <h2 className="section-title">
            Construyo con propósito.
            <span className="secondary"> Código que resuelve problemas reales.</span>
          </h2>
        </Reveal>

        {/* Bio + Info Cards */}
        <div className="about-bio-row">
          <Reveal className="about-text">
            <p>
              Soy <strong>Ingeniero Civil Informático</strong> con profunda pasión por el
              desarrollo web y la creación de experiencias digitales modernas. Me especializo
              en construir productos que combinan rendimiento técnico con diseño excepcional.
            </p>
            <p className="about-text-secondary">
              Mi enfoque está en el desarrollo Full Stack aplicando principios de Clean Code,
              arquitecturas escalables y buenas prácticas de ingeniería de software. Disfruto
              cada fase del proceso: desde el diseño de la arquitectura hasta los últimos
              detalles de la UI.
            </p>
            <p className="about-text-secondary">
              Creo firmemente que el mejor código es aquel que es legible, mantenible y entrega
              valor real. Siempre busco aprender nuevas tecnologías y aplicar soluciones
              creativas a problemas complejos.
            </p>
          </Reveal>

          <Reveal className="about-info-cards" delay={0.1}>
            {infoCards.map((card) => (
              <div key={card.label} className="info-card">
                <span className="info-card-icon">{card.icon}</span>
                <div>
                  <span className="info-card-label">{card.label}</span>
                  <strong className="info-card-title">{card.title}</strong>
                  <span className="info-card-detail">{card.detail}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Values */}
        <Reveal delay={0.15}>
          <h3 className="about-subtitle">Lo que me define</h3>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <strong>{v.title}</strong>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Tech Stack */}
        <Reveal className="about-stack-section" delay={0.2}>
          <h3 className="about-subtitle">Stack tecnológico</h3>
          <div className="about-grid">
            <div className="stack-panel">
              {stack.map((g) => (
                <div key={g.label}>
                  <span className="stack-label">{g.label}</span>
                  <div className="chips">
                    {g.items.map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
