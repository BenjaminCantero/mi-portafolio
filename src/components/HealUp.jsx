// src/components/HealUp.jsx
import { motion as Motion } from "framer-motion";
import Showcase, { Tile, StackChips } from "./Showcase";

function Phone() {
  return (
    <div className="hu-phone" aria-hidden="true">
      <div className="hu-notch" />
      <span className="hu-hello">Hola, Benjamín</span>
      <strong className="hu-h">Tu entrenamiento</strong>
      <div className="hu-progress">
        <span>Semana actual</span>
        <Motion.span
          className="hu-bar"
          initial={{ width: 0 }}
          whileInView={{ width: "68%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <small>4 de 6 entrenamientos completados</small>
      </div>
      <div className="hu-grid" aria-hidden="true">
        <span className="hu-chip">Rutina</span>
        <span className="hu-chip">Dolor</span>
        <span className="hu-chip">Lesión</span>
        <span className="hu-chip">Logros</span>
      </div>
      <Motion.div
        className="hu-card"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        viewport={{ once: true }}
      >
        <strong>Press banca</strong>
        <small>3 × 10 · 60 kg · Completado</small>
      </Motion.div>
    </div>
  );
}

function HealUp() {
  return (
    <Showcase
      theme="healup"
      label="App móvil · Flutter"
      meta={["Salud y entrenamiento", "Multiplataforma", "API propia"]}
      title="HealUp"
      lead="App de salud y entrenamiento: rutinas, ejercicios, sesiones, log de dolor, lesiones y gamificación, con app Flutter y backend propio."
    >
      <Tile
        wide
        title="Tu entrenamiento, siempre a mano"
        text="Pantalla principal con el progreso de la semana, el ejercicio actual y acceso rápido a rutinas, registro de dolor, lesiones y logros."
      >
        <Phone />
      </Tile>

      <Tile title="Rutinas y ejercicios" text="Catálogo de ejercicios con series, repeticiones y cargas. Cada rutina se puede iniciar, pausar y completar desde el móvil." delay={0.05}>
        <div className="hu-list" aria-hidden="true">
          <div className="hu-item">
            <span className="hu-dot press" />
            <div>
              <strong>Press banca</strong>
              <small>3 × 10 · 60 kg</small>
            </div>
          </div>
          <div className="hu-item">
            <span className="hu-dot squat" />
            <div>
              <strong>Sentadilla</strong>
              <small>4 × 8 · 80 kg</small>
            </div>
          </div>
          <div className="hu-item">
            <span className="hu-dot row" />
            <div>
              <strong>Remo con barra</strong>
              <small>3 × 12 · 50 kg</small>
            </div>
          </div>
        </div>
      </Tile>

      <Tile wide title="Log de dolor y lesiones" text="Registro de molestias por zona corporal con intensidad y notas. Historial de lesiones para evitar recaídas en el entrenamiento." delay={0.1}>
        <div className="hu-body" aria-hidden="true">
          <span className="hu-zone shoulder" title="Hombro" />
          <span className="hu-zone knee" title="Rodilla" />
          <span className="hu-zone lumbar" title="Lumbar" />
          <span className="hu-label">Hombro · 3/10 · Ayer</span>
        </div>
      </Tile>

      <Tile title="Gamificación y logros" text="Rachas de entrenamiento, puntos por sesión y medallas al alcanzar metas. Motivación visual para mantener la constancia." delay={0.15}>
        <div className="hu-badges" aria-hidden="true">
          <span className="hu-badge on">🥇 5 días seguidos</span>
          <span className="hu-badge on">💪 10 entrenamientos</span>
          <span className="hu-badge off">🔥 30 días seguidos</span>
          <span className="hu-badge off">🏆 50 kg press banca</span>
        </div>
      </Tile>

      <Tile
        full
        title="Tecnología"
        text="Frontend en Flutter multiplataforma (iOS, Android, Web) con navegación propia, providers de estado y consumo de API REST. Backend en Node.js con TypeScript y autenticación por token."
      >
        <StackChips items={["Flutter", "Dart", "Node.js", "TypeScript", "REST API", "JWT"]} />
      </Tile>
    </Showcase>
  );
}

export default HealUp;
