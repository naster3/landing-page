import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Brand Column */}
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <div className="footer-logo-icon">EX</div>
                <span className="footer-logo-text">Excel Expertos</span>
              </a>
              <p className="footer-description">
                Transformamos profesionales con cursos de Excel desde básico hasta experto. Más de 10 años capacitando a miles de estudiantes en todo el mundo.
              </p>
              <div className="footer-social">
                <a href="#" className="footer-social-link" title="Facebook">📘</a>
                <a href="#" className="footer-social-link" title="Instagram">📸</a>
                <a href="#" className="footer-social-link" title="Twitter">🐦</a>
                <a href="#" className="footer-social-link" title="LinkedIn">💼</a>
                <a href="#" className="footer-social-link" title="YouTube">📺</a>
                <a href="#" className="footer-social-link" title="TikTok">🎵</a>
              </div>
            </div>

            {/* Cursos Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Nuestros Cursos</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Excel Básico Profesional</a>
                <a href="#" className="footer-link">Excel Avanzado</a>
                <a href="#" className="footer-link">Excel + Power BI Master</a>
                <a href="#" className="footer-link">Macros y VBA</a>
                <a href="#" className="footer-link">Dashboard Profesionales</a>
                <a href="#" className="footer-link">Análisis de Datos</a>
                <a href="#" className="footer-link">Cursos Corporativos</a>
              </div>
            </div>

            {/* Recursos Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Recursos</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Blog de Excel</a>
                <a href="#" className="footer-link">Tips Gratuitos</a>
                <a href="#" className="footer-link">Plantillas Excel</a>
                <a href="#" className="footer-link">Casos de Estudio</a>
                <a href="#" className="footer-link">FAQ</a>
                <a href="#" className="footer-link">Centro de Ayuda</a>
                <a href="#" className="footer-link">Certificaciones</a>
              </div>
            </div>

            {/* Empresa Column */}
            <div className="footer-column">
              <h3 className="footer-column-title">Empresa</h3>
              <div className="footer-links">
                <a href="#sobre-nosotros" className="footer-link">Sobre Nosotros</a>
                <a href="#" className="footer-link">Nuestro Equipo</a>
                <a href="#" className="footer-link">Metodología</a>
                <a href="#contacto" className="footer-link">Contacto</a>
                <a href="#" className="footer-link">Testimonios</a>
                <a href="#" className="footer-link">Afiliados</a>
                <a href="#" className="footer-link">Trabaja con Nosotros</a>
              </div>
              
              <div className="newsletter-signup">
                <p style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', marginBottom: '0.75rem'}}>
                  📧 Tips de Excel gratis
                </p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    className="newsletter-input" 
                    placeholder="tu@email.com"
                    required
                  />
                  <button type="submit" className="newsletter-button">
                    Suscribir
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2025 Excel Expertos. Todos los derechos reservados.
            </div>
            
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Términos y Condiciones</a>
              <a href="#" className="footer-legal-link">Política de Privacidad</a>
              <a href="#" className="footer-legal-link">Política de Reembolso</a>
              <a href="#" className="footer-legal-link">Cookies</a>
            </div>

            <div className="footer-badge">
              <span className="footer-badge-icon">🔒</span>
              <span className="footer-badge-text">Pago Seguro SSL</span>
            </div>
          </div>
        </div>
      </footer>

        </div>
    );
}

export default Footer;
