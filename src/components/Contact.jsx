// src/components/Contact.jsx
function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "canteroalexander56@gmail.com",
      href: "mailto:canteroalexander56@gmail.com",
      icon: "✉️"
    },
    {
      label: "GitHub",
      value: "github.com/BenjaminCantero",
      href: "https://github.com/BenjaminCantero",
      icon: "👉"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/tu_usuario",
      href: "https://linkedin.com/in/tu_usuario",
      icon: "💼"
    }
  ];

  return (
    <section id="contacto" className="section contact">
      <div className="section-container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">¿Quieres conectar? Aquí me encuentras</p>
        
        <div className="contact-content">
          <div className="contact-text">
            <p>
              Estoy disponible para colaboraciones, proyectos interesantes o simplemente para conversar 
              sobre desarrollo web y tecnología.
            </p>
            <p className="contact-cta">¡No dudes en contactarme!</p>
          </div>
          
          <div className="contact-list">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="contact-item"
              >
                <span className="contact-icon">{contact.icon}</span>
                <div className="contact-info">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
