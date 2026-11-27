// src/components/Projects.jsx
import Reveal from "./Reveal";
import FullFragrance from "./FullFragrance";
import VetConecta from "./VetConecta";
import Drones from "./Drones";

const icons = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M3 10h18M8 3v4M16 3v4M8 15h3" />
    </>
  ),
  graph: (
    <>
      <path d="M3 3v18h18" />
      <path d="M6 16c3-9 6-9 8-4s4 3 6-4" />
    </>
  ),
};

const projects = [
  {
    title: "BarberíaApp",
    kind: "Web · Full stack",
    icon: "calendar",
    description: "Reservas para barberías con roles, recordatorios por email, reseñas y reportes de ingresos y ocupación.",
    stack: "React · Express · Prisma · PostgreSQL",
    link: "https://github.com/BenjaminCantero/BarberiaApp",
  },
  {
    title: "Analizador de funciones",
    kind: "Escritorio",
    icon: "graph",
    description: "Calcula dominio, recorrido e intersecciones de una función y la grafica paso a paso.",
    stack: "Python · Tkinter · Matplotlib · SymPy",
    link: "https://github.com/BenjaminCantero/funciones",
  },
  {
    title: "HealUp",
    kind: "App móvil · Flutter",
    icon: "calendar",
    description: "App de salud y entrenamiento: rutinas, ejercicios, sesiones, log de dolor, lesiones y gamificación, con API propia y app Flutter multiplataforma.",
    stack: "Flutter · Dart · Node.js · TypeScript",
    link: undefined,
  },
  {
    title: "Stronger Fit",
    kind: "App móvil · React Native",
    icon: "graph",
    description: "App de entrenamiento y nutrición con Expo, Supabase (Auth, PostgreSQL con RLS, Edge Functions) y API Hono. Planes de entrenamiento, catálogo de alimentos y sesión de entrenamiento con borrador offline.",
    stack: "Expo · React Native · TypeScript · Supabase · Hono · Deno · SQLite",
    link: "https://github.com/BenjaminCantero/StrongerFit",
  },
];

function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Proyectos</span>
          <h2 className="section-title">
            Lo que he construido.
            <span className="secondary"> Ideas llevadas hasta algo que funciona.</span>
          </h2>
        </Reveal>

        <div className="showcases">
          <FullFragrance />
          <VetConecta />
          <Drones />
        </div>

        <h3 className="projects-subtitle">Más proyectos</h3>
        <div className="cards">
          {projects.map((p, i) => {
            const isLink = Boolean(p.link);
            return (
              <Reveal key={p.title} delay={i * 0.06}>
                {isLink ? (
                  <a href={p.link} target="_blank" rel="noreferrer" className="card">
                    <svg className="card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {icons[p.icon]}
                    </svg>
                    <span className="card-kind">{p.kind}</span>
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>
                    <span className="stack">{p.stack}</span>
                    <span className="link-more card-link">Ver código</span>
                  </a>
                ) : (
                  <div className="card">
                    <svg className="card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {icons[p.icon]}
                    </svg>
                    <span className="card-kind">{p.kind}</span>
                    <h4>{p.title}</h4>
                    <p>{p.description}</p>
                    <span className="stack">{p.stack}</span>
                    <span className="card-link" style={{ opacity: 0.5 }}>Proyecto local</span>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
