// src/components/FullFragrance.jsx
import { motion as Motion } from "framer-motion";
import Showcase, { Tile, StackChips } from "./Showcase";

// Datos ilustrativos: la app usa precios simulados mientras no haya scraping real.
const prices = [
  { store: "Perfumería Centro", price: "$64.990", best: true },
  { store: "Tienda online", price: "$69.990" },
  { store: "Sucursal Mall", price: "$74.490" },
];

const notes = [
  { name: "Bergamota", family: "Cítrica", rating: 5 },
  { name: "Vainilla", family: "Gourmand", rating: 4 },
  { name: "Sándalo", family: "Amaderada", rating: 3 },
];

const pins = [
  { x: 28, y: 34 },
  { x: 62, y: 22 },
  { x: 74, y: 58 },
  { x: 40, y: 70 },
];

const MATCH = 92;
const RING = 2 * Math.PI * 34;

function Stars({ value }) {
  return (
    <span className="ff-stars" aria-label={`${value} de 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= value ? "on" : ""}>★</span>
      ))}
    </span>
  );
}

function FullFragrance() {
  return (
    <Showcase
      theme="ff"
      label="Proyecto destacado"
      meta={["Web full stack", "En colaboración con Juan Valdebenito"]}
      title="FullFragrance"
      lead="Descubre perfumes, compara precios entre las tiendas de tu ciudad y recibe recomendaciones según tus gustos."
    >
      <Tile wide title="Comparador de precios" text="Ordena las tiendas de menor a mayor y marca la mejor oferta según la ciudad del usuario.">
        <div className="mock-card" aria-hidden="true">
          <div className="mock-card-head">
            <span>Santiago</span>
            <span>3 tiendas</span>
          </div>
          {prices.map((p, i) => (
            <Motion.div
              key={p.store}
              className={`ff-price ${p.best ? "best" : ""}`}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              viewport={{ once: true }}
            >
              <span>{p.store}</span>
              {p.best && <span className="sc-badge">Mejor precio</span>}
              <strong>{p.price}</strong>
            </Motion.div>
          ))}
        </div>
      </Tile>

      <Tile title="Recomendaciones" text="Cruza el test y los favoritos, y explica cada sugerencia." delay={0.05}>
        <div className="ff-match" aria-hidden="true">
          <svg viewBox="0 0 80 80" width="112" height="112">
            <circle cx="40" cy="40" r="34" className="ring-track" />
            <Motion.circle
              cx="40"
              cy="40"
              r="34"
              className="ring-fill"
              strokeDasharray={RING}
              initial={{ strokeDashoffset: RING }}
              whileInView={{ strokeDashoffset: RING * (1 - MATCH / 100) }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            />
          </svg>
          <div className="ff-match-label">
            <strong>{MATCH}%</strong>
            <span>coincidencia</span>
          </div>
        </div>
      </Tile>

      <Tile title="Test olfativo" text="22 notas en cuatro etapas, calificadas de 1 a 5.">
        <ul className="mock-list" aria-hidden="true">
          {notes.map((n) => (
            <li key={n.name}>
              <div>
                <strong>{n.name}</strong>
                <span>{n.family}</span>
              </div>
              <Stars value={n.rating} />
            </li>
          ))}
        </ul>
      </Tile>

      <Tile title="Tiendas cercanas" text="Sucursales reales desde OpenStreetMap, ordenadas por distancia." delay={0.05}>
        <div className="ff-map" aria-hidden="true">
          {pins.map((p, i) => (
            <Motion.span
              key={i}
              className="ff-pin"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
          <span className="ff-you" style={{ left: "50%", top: "46%" }} />
        </div>
      </Tile>

      <Tile title="Cuentas seguras" text="JWT, Google Sign-In, bcrypt y revocación de sesiones al cambiar la contraseña." delay={0.1}>
        <div className="sc-glyph" aria-hidden="true">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="11" width="16" height="10" rx="2.5" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
        </div>
      </Tile>

      <Tile
        full
        title="Arquitectura"
        text="Frontend organizado por funcionalidades, API documentada con Swagger y migración idempotente a PostgreSQL."
        link={{ href: "https://github.com/Juan-Valdebenito/FullFragance", label: "Ver repositorio" }}
      >
        <StackChips items={["Next.js 16", "React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Leaflet", "Overpass API"]} />
      </Tile>
    </Showcase>
  );
}

export default FullFragrance;
