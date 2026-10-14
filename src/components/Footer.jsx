// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Benjamín Cantero</span>
        <a href="#inicio">Volver arriba</a>
      </div>
    </footer>
  );
}

export default Footer;
