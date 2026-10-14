// src/components/Reveal.jsx
import { motion } from "framer-motion";

// Fade-in suave al entrar en pantalla. Se desactiva con "reducir movimiento".
function Reveal({ children, delay = 0, as = "div", ...props }) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}
      viewport={{ once: true, margin: "-80px" }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
