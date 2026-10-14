// src/components/VetConecta.jsx
import { motion as Motion } from "framer-motion";
import Showcase, { Tile, StackChips } from "./Showcase";

// Datos tomados de los mocks del proyecto (la API del otro equipo aún es de solo lectura).
const timeline = [
  { type: "Vacuna", text: "Antirrábica anual", date: "20 sep 2025", tone: "green" },
  { type: "Control", text: "Peso 31 kg, sin observaciones", date: "20 sep 2025", tone: "violet" },
  { type: "Tratamiento", text: "Antiinflamatorio por 7 días", date: "8 feb 2026", tone: "coral" },
];

const slots = [
  { time: "09:00" },
  { time: "10:30", taken: true },
  { time: "11:15" },
  { time: "12:00", selected: true },
  { time: "15:30", taken: true },
  { time: "16:45" },
];

const team = ["BC", "NA", "RG"];

function Phone() {
  return (
    <div className="vc-phone" aria-hidden="true">
      <div className="vc-notch" />
      <span className="vc-hello">Hola de nuevo</span>
      <strong className="vc-h">Tus mascotas</strong>
      <div className="vc-pets">
        <span className="vc-pet active">
          <i>R</i>Rocky
        </span>
        <span className="vc-pet">
          <i>L</i>Luna
        </span>
      </div>
      <Motion.div
        className="vc-hero"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span>Próximo control</span>
        <strong>Rocky · 15 oct</strong>
        <small>Labrador retriever · 5 años</small>
      </Motion.div>
      <Motion.div
        className="vc-med"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        viewport={{ once: true }}
      >
        <div>
          <strong>Amoxicilina 250 mg</strong>
          <small>Luna · Hoy, 18:00 hrs.</small>
        </div>
        <span className="vc-progress">
          <Motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </span>
      </Motion.div>
      <div className="vc-tabs">
        <span className="on">Inicio</span>
        <span>Mascotas</span>
        <span>Citas</span>
      </div>
    </div>
  );
}

function VetConecta() {
  return (
    <Showcase
      theme="vc"
      label="App móvil"
      meta={["Equipo de 3", "Con Nicolás Arriagada y Ricardo Garcés"]}
      title="VetConecta"
      lead="App para dueños de mascotas: carnet veterinario, historial clínico, citas y recordatorios de medicamentos."
    >
      <Tile
        wide
        title="Todo sobre tu mascota, en el bolsillo"
        text="Inicio con la mascota activa, su próximo control y los medicamentos del día. Cambias de mascota y toda la app la sigue."
      >
        <Phone />
      </Tile>

      <Tile title="Carnet digital" text="El historial clínico se dibuja como una línea de tiempo." delay={0.05}>
        <ol className="vc-timeline" aria-hidden="true">
          {timeline.map((e) => (
            <li key={e.type} className={`tone-${e.tone}`}>
              <strong>{e.type}</strong>
              <span>{e.text}</span>
              <small>{e.date}</small>
            </li>
          ))}
        </ol>
      </Tile>

      <Tile title="Reserva de horas" text="Disponibilidad en vivo y manejo del conflicto cuando otra persona toma la misma hora.">
        <div aria-hidden="true">
          <div className="vc-slots">
            {slots.map((s) => (
              <span key={s.time} className={s.taken ? "taken" : s.selected ? "selected" : ""}>
                {s.time}
              </span>
            ))}
          </div>
          <p className="vc-toast">Esa hora ya fue reservada, elige otra.</p>
        </div>
      </Tile>

      <Tile title="Clean Architecture" text="Cada funcionalidad separada en tres capas, con reglas de frontera verificadas por ESLint." delay={0.05}>
        <div className="vc-layers" aria-hidden="true">
          <span>presentation</span>
          <i>↓</i>
          <span className="core">domain</span>
          <i>↑</i>
          <span>data</span>
        </div>
      </Tile>

      <Tile title="Trabajo en equipo" text="Ramas personales que se integran en develop; main solo recibe código estable." delay={0.1}>
        <div className="vc-team" aria-hidden="true">
          {team.map((t) => <span key={t}>{t}</span>)}
        </div>
      </Tile>

      <Tile
        full
        title="Mi parte"
        text="Carnet como línea de tiempo, servicios de disponibilidad y reserva, selector de mascota activa, detalle de mascota y el rediseño de las pantallas según la maqueta."
        link={{ href: "https://github.com/BenjaminCantero/Vetconecta-mobile/tree/Develop", label: "Ver repositorio" }}
      >
        <StackChips items={["Expo SDK 57", "React Native", "TypeScript", "React Navigation", "NativeWind", "Axios", "Jest"]} />
      </Tile>
    </Showcase>
  );
}

export default VetConecta;
