// src/components/StrongerFit.jsx
import { motion as Motion } from "framer-motion";
import Showcase, { Tile, StackChips } from "./Showcase";

function Phone() {
  return (
    <div className="sf-phone" aria-hidden="true">
      <div className="sf-notch" />
      <span className="sf-hello">Entrenamiento de hoy</span>
      <strong className="sf-h">Piernas · Nivel 2</strong>
      <div className="sf-progress">
        <span>Progreso de la sesión</span>
        <Motion.span
          className="sf-bar"
          initial={{ width: 0 }}
          whileInView={{ width: "55%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <small>3 de 5 ejercicios completados</small>
      </div>
      <div className="sf-grid" aria-hidden="true">
        <span className="sf-chip">Entrenar</span>
        <span className="sf-chip">Nutrición</span>
        <span className="sf-chip">Progreso</span>
        <span className="sf-chip">Perfil</span>
      </div>
      <Motion.div
        className="sf-card"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        viewport={{ once: true }}
      >
        <strong>Sentadilla trasera</strong>
        <small>4 × 8 · 70 kg · En curso</small>
      </Motion.div>
    </div>
  );
}

function StrongerFit() {
  return (
    <Showcase
      theme="sf"
      label="App móvil · React Native"
      meta={["Entrenamiento y nutrición", "Android-first", "Expo SDK 58"]}
      title="Stronger Fit"
      lead="App de entrenamiento y nutrición con Expo, Supabase (Auth, PostgreSQL con RLS, Edge Functions) y API Hono. Planes de entrenamiento, catálogo de alimentos y sesión de entrenamiento con borrador offline."
    >
      <Tile
        wide
        title="Tu sesión, siempre sincronizada"
        text="Pantalla de entrenamiento con progreso en vivo, ejercicios de la rutina y soporte offline: la sesión se guarda como borrador y se envía al recuperar la conexión."
      >
        <Phone />
      </Tile>

      <Tile title="Planes de entrenamiento" text="Catálogo de plantillas con cargas, series y repeticiones. Cada usuario elige su plan y avanza según su nivel y objetivos." delay={0.05}>
        <div className="sf-list" aria-hidden="true">
          <div className="sf-item">
            <span className="sf-dot legs" />
            <div>
              <strong>Piernas · Nivel 2</strong>
              <small>Sentadilla, peso muerto, zancada</small>
            </div>
          </div>
          <div className="sf-item">
            <span className="sf-dot back" />
            <div>
              <strong>Espalda · Nivel 2</strong>
              <small>Dominada, remo, peso muerto rumano</small>
            </div>
          </div>
          <div className="sf-item">
            <span className="sf-dot chest" />
            <div>
              <strong>Pecho · Nivel 1</strong>
              <small>Press banca, aperturas, fondos</small>
            </div>
          </div>
        </div>
      </Tile>

      <Tile title="Catálogo de alimentos" text="Base de datos de alimentos con calorías y macros. Genera minutassemanalessegún tus metas nutricionales y preferencias." delay={0.1}>
        <div className="sf-foods" aria-hidden="true">
          <div className="sf-food">
            <strong>Pechuga de pollo</strong>
            <span>165 kcal · 31 g proteína</span>
          </div>
          <div className="sf-food">
            <strong>Avena</strong>
            <span>389 kcal · 17 g proteína</span>
          </div>
          <div className="sf-food">
            <strong>Huevo</strong>
            <span>155 kcal · 13 g proteína</span>
          </div>
        </div>
      </Tile>

      <Tile title="Sesión offline" text="TanTanStack Query mantiene el caché del servidor y la sesión se guarda en SQLite local. Sin conexión, el borrador queda pendiente y se reintenta automáticamente." delay={0.15}>
        <div className="sf-offline" aria-hidden="true">
          <span className="sf-tag online">Online</span>
          <span className="sf-tag pending">Pendiente</span>
          <span className="sf-tag synced">Sincronizado</span>
        </div>
      </Tile>

      <Tile
        full
        title="Arquitectura"
        text="Frontend con Expo Router y TanStack Query, backend en Hono + Deno, Supabase con Auth, RLS y Edge Functions, y paquetes compartidos de contratos, motor de entrenamiento y motor de nutrición."
        link={{ href: "https://github.com/BenjaminCantero/StrongerFit", label: "Ver repositorio" }}
      >
        <StackChips items={["Expo", "React Native", "TypeScript", "Supabase", "Hono", "Deno", "SQLite", "TanStack Query"]} />
      </Tile>
    </Showcase>
  );
}

export default StrongerFit;
