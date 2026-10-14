// src/components/About.jsx
import Reveal from "./Reveal";

const stack = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Flutter"] },
  { label: "Backend", items: ["Node.js", "Express", "Python", "FastAPI", "Java"] },
  { label: "Datos y herramientas", items: ["PostgreSQL", "MySQL", "Prisma", "Git", "Linux"] },
];

const principles = [
  { title: "De punta a punta", text: "Diseño la API, modelo los datos y cuido la interfaz." },
  { title: "Trabajo en equipo", text: "FullFragrance lo construimos entre dos, en un mismo repositorio y con decisiones compartidas." },
  { title: "Terminar lo que empiezo", text: "Cada proyecto llega a algo usable, documentado y desplegable." },
];

function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Sobre mí</span>
          <h2 className="section-title">
            Aprendo construyendo.
            <span className="secondary"> Busco mi primera práctica profesional.</span>
          </h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              Soy estudiante de <strong>Ingeniería Civil Informática</strong>. Todavía no tengo
              experiencia laboral formal, así que la he ganado en proyectos propios y en equipo,
              llevando cada uno desde la idea hasta algo que funciona.
            </p>
            <ul className="principles">
              {principles.map((p) => (
                <li key={p.title}>
                  <strong>{p.title}</strong>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="stack-panel" delay={0.1}>
            {stack.map((g) => (
              <div key={g.label}>
                <span className="stack-label">{g.label}</span>
                <div className="chips">
                  {g.items.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
