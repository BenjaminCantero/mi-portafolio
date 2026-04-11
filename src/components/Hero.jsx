// src/components/Hero.jsx
import { motion } from "framer-motion";
import avatarImg from "../assets/avatar.png";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <header id="inicio" className="hero">
      <div className="hero-bg-blobs">
        <div className="blob-cyan"></div>
        <div className="blob-indigo"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.h1 className="hero-title" variants={itemVariants}>
            Benjamín Cantero
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Desarrollador Web Full Stack
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants}>
            Ingeniero Civil Informático apasionado por crear aplicaciones web y móviles modernas, 
            escalables y con una experiencia de usuario deslumbrante.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos
            </a>
            <a href="#contacto" className="btn btn-secondary">
              Contactarme
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-image-container"
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="avatar-wrapper">
            <img src={avatarImg} alt="Benjamín Cantero Avatar" />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Hero;

