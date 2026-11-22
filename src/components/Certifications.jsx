// src/components/Certifications.jsx
import Reveal from "./Reveal";

// Los PDF y sus miniaturas viven en public/certificados/.
const certifications = [
  {
    title: "Desarrollo con IA: Programa con Agentes",
    issuer: "MoureDev · BIG school",
    date: "Nov 2026",
    file: "Certificado-Benjamin-Cantero-Garrido-3ff09e5e68",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    issuer: "Google · Coursera",
    date: "Dic 2025",
    file: "google-play-it-safe",
    verify: "https://coursera.org/verify/ZLVL29ZCC9FF",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google · Coursera",
    date: "Ago 2025",
    file: "google-foundations-of-cybersecurity",
    verify: "https://coursera.org/verify/L54CPETF4JVR",
  },
  {
    title: "Storytelling en el Marketing Digital",
    issuer: "Santander Open Academy",
    date: "Dic 2024",
    file: "santander-storytelling-marketing-digital",
  },
  {
    title: "Gestión de Proyectos y Fundamentos de Agile",
    issuer: "Santander Open Academy",
    date: "Oct 2024",
    file: "santander-agile",
  },
  {
    title: "Python",
    issuer: "Santander Open Academy",
    date: "Sep 2024",
    file: "santander-python",
  },
];

const base = `${import.meta.env.BASE_URL}certificados/`;

function Certifications() {
  return (
    <section id="certificaciones" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Certificaciones</span>
          <h2 className="section-title">
            Aprendizaje continuo.
            <span className="secondary"> Cursos que complementan mi formación.</span>
          </h2>
        </Reveal>

        <ul className="certs">
          {certifications.map((c, i) => (
            <Reveal as="li" key={c.file} delay={i * 0.05} className="cert">
              <a
                href={`${base}${c.file}.pdf`}
                target="_blank"
                rel="noreferrer"
                className="cert-thumb"
                aria-label={`Ver certificado: ${c.title} (PDF)`}
              >
                <img
                  src={`${base}${c.file}.jpg`}
                  alt=""
                  width="720"
                  height="450"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="cert-body">
                <span className="card-kind">
                  {c.issuer} · <time>{c.date}</time>
                </span>
                <h3>{c.title}</h3>
                <div className="cert-links">
                  <a href={`${base}${c.file}.pdf`} target="_blank" rel="noreferrer" className="link-more">
                    Ver certificado
                  </a>
                  {c.verify && (
                    <a href={c.verify} target="_blank" rel="noreferrer" className="link-more">
                      Verificar
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;
