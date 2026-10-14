// src/components/Drones.jsx
import { motion as Motion } from "framer-motion";
import Showcase, { Tile, StackChips } from "./Showcase";

// Red ilustrativa: el simulador genera nodos aleatorios dentro de Temuco
// (20% almacenes, 20% estaciones de recarga, 60% clientes).
const nodes = {
  A: { x: 34, y: 150, role: "storage" },
  B: { x: 84, y: 58, role: "client" },
  C: { x: 128, y: 138, role: "recharge" },
  D: { x: 176, y: 74, role: "client" },
  E: { x: 214, y: 160, role: "client" },
  F: { x: 256, y: 44, role: "recharge" },
  G: { x: 292, y: 120, role: "client" },
  H: { x: 150, y: 24, role: "storage" },
};

const edges = [
  ["A", "B"], ["A", "C"], ["B", "D"], ["C", "D"], ["C", "E"], ["D", "F"],
  ["D", "E"], ["E", "G"], ["F", "G"], ["B", "H"], ["H", "F"],
];

const route = ["A", "C", "E", "G"];
const mst = new Set(["A-B", "A-C", "C-E", "C-D", "D-F", "F-G", "B-H"]);

const battery = [
  { stop: "Almacén A", level: 100, note: "50 / 50" },
  { stop: "Recarga C", level: 100, note: "recarga completa" },
  { stop: "Cliente G", level: 38, note: "19 / 50" },
];

const endpoints = [
  ["GET", "/clients/"],
  ["GET", "/orders/"],
  ["POST", "/orders/{id}/cancel"],
  ["GET", "/routes/"],
  ["GET", "/report/pdf"],
];

const visits = [9, 7, 6, 4, 3, 2];

const avl = [
  { x: 80, y: 18, f: 12 },
  { x: 42, y: 56, f: 7 },
  { x: 118, y: 56, f: 9 },
  { x: 22, y: 94, f: 3 },
  { x: 62, y: 94, f: 5 },
  { x: 138, y: 94, f: 4 },
];

function pathFor(ids) {
  return ids.map((id, i) => `${i ? "L" : "M"}${nodes[id].x} ${nodes[id].y}`).join(" ");
}

function Network() {
  return (
    <svg className="dr-net" viewBox="0 0 326 184" aria-hidden="true">
      {edges.map(([a, b]) => (
        <line key={a + b} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} className="dr-edge" />
      ))}
      <Motion.path
        d={pathFor(route)}
        className="dr-route"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.3 }}
        viewport={{ once: true }}
      />
      {Object.entries(nodes).map(([id, n]) => (
        <g key={id}>
          <circle cx={n.x} cy={n.y} r={route.includes(id) ? 9 : 7} className={`dr-node ${n.role}`} />
          <text x={n.x} y={n.y - 14} className="dr-label">{id}</text>
        </g>
      ))}
    </svg>
  );
}

function Drones() {
  return (
    <Showcase
      theme="dr"
      label="Proyecto universitario"
      meta={["Estructuras de datos", "Python"]}
      title="Drones logísticos"
      lead="Simulador de entregas con drones sobre un mapa real de Temuco: rutas con batería limitada, clientes, órdenes e informes."
    >
      <Tile
        wide
        title="Rutas que respetan la batería"
        text="Búsqueda en anchura con autonomía de 50 unidades: si la carga no alcanza, la ruta debe pasar por una estación de recarga."
      >
        <div className="dr-route-mock">
          <Network />
          <div className="dr-legend" aria-hidden="true">
            <span className="storage">Almacén</span>
            <span className="recharge">Recarga</span>
            <span className="client">Cliente</span>
          </div>
          <ul className="dr-battery" aria-hidden="true">
            {battery.map((b, i) => (
              <li key={b.stop}>
                <span>{b.stop}</span>
                <span className="dr-bar">
                  <Motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.level}%` }}
                    transition={{ duration: 0.7, delay: 0.6 + i * 0.25 }}
                    viewport={{ once: true }}
                  />
                </span>
                <small>{b.note}</small>
              </li>
            ))}
          </ul>
        </div>
      </Tile>

      <Tile title="Árbol de expansión mínima" text="Kruskal con unión-búsqueda conecta toda la red al menor costo." delay={0.05}>
        <svg className="dr-mst" viewBox="0 0 326 184" aria-hidden="true">
          {edges.map(([a, b]) => (
            <line
              key={a + b}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              className={mst.has(`${a}-${b}`) ? "dr-mst-on" : "dr-mst-off"}
            />
          ))}
          {Object.entries(nodes).map(([id, n]) => (
            <circle key={id} cx={n.x} cy={n.y} r="8" className={`dr-node ${n.role}`} />
          ))}
        </svg>
      </Tile>

      <Tile title="Estructuras propias" text="HashMap y árbol AVL escritos desde cero para clientes, órdenes y frecuencia de rutas.">
        <svg className="dr-avl" viewBox="0 0 160 112" aria-hidden="true">
          {[[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]].map(([p, c]) => (
            <line key={`${p}${c}`} x1={avl[p].x} y1={avl[p].y} x2={avl[c].x} y2={avl[c].y} />
          ))}
          {avl.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="13" />
              <text x={n.x} y={n.y + 4}>{n.f}</text>
            </g>
          ))}
        </svg>
      </Tile>

      <Tile title="API REST" text="FastAPI expone clientes, órdenes, rutas e informes, con documentación Swagger." delay={0.05}>
        <ul className="dr-api" aria-hidden="true">
          {endpoints.map(([m, p]) => (
            <li key={p}>
              <span className={m === "POST" ? "post" : ""}>{m}</span>
              {p}
            </li>
          ))}
        </ul>
      </Tile>

      <Tile title="Informes en PDF" text="Pedidos, clientes frecuentes, rutas más usadas y gráficos, generados con un clic." delay={0.1}>
        <div className="dr-bars" aria-hidden="true">
          {visits.map((v, i) => (
            <Motion.span
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${(v / 9) * 100}%` }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </Tile>

      <Tile
        full
        title="Cómo está hecho"
        text="Panel en Streamlit con mapa interactivo, backend FastAPI y persistencia en SQLite con SQLAlchemy, separados por dominio, modelo y estructuras de datos."
        link={{ href: "https://github.com/BenjaminCantero/DronesSistem", label: "Ver repositorio" }}
      >
        <StackChips items={["Python", "FastAPI", "Streamlit", "SQLAlchemy", "SQLite", "Folium", "NetworkX", "fpdf2"]} />
      </Tile>
    </Showcase>
  );
}

export default Drones;
