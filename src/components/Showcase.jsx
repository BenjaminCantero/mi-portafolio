// src/components/Showcase.jsx
import Reveal from "./Reveal";

// Marco común de las vitrinas de proyecto. Cada una trae su propia paleta
// (clase theme-*) para que la marca viva en el contenido.
function Showcase({ theme, label, meta, title, lead, children }) {
  return (
    <article className={`showcase theme-${theme}`}>
      <Reveal className="sc-intro">
        <div className="sc-meta">
          <span>{label}</span>
          {meta.map((m) => <span key={m}>{m}</span>)}
        </div>
        <h3 className="sc-title">{title}</h3>
        <p className="sc-lead">{lead}</p>
      </Reveal>
      <div className="bento">{children}</div>
    </article>
  );
}

export function Tile({ title, text, wide, full, delay, children, link }) {
  const cls = ["tile", wide && "tile-wide", full && "tile-full"].filter(Boolean).join(" ");
  return (
    <Reveal className={cls} delay={delay}>
      <div className="tile-copy">
        <h4>{title}</h4>
        <p>{text}</p>
        {link && (
          <a href={link.href} target="_blank" rel="noreferrer" className="link-more">
            {link.label}
          </a>
        )}
      </div>
      {children}
    </Reveal>
  );
}

export function StackChips({ items }) {
  return (
    <div className="sc-stack">
      {items.map((t) => <span key={t}>{t}</span>)}
    </div>
  );
}

export default Showcase;
