import React from 'react';

const Contactos = () => {
    return (
        <div>
            {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <span className="section-label">Contacto</span>
            <h2 className="section-title">¿Listo para Transformar tu Carrera?</h2>
            <p className="section-description">
              Ponte en contacto con nosotros y descubre cómo nuestros cursos de Excel pueden impulsar tu crecimiento profesional
            </p>
          </div>

          <div className="contact-content">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Hablemos de tu Futuro</h3>
              <p>
                Nuestro equipo de expertos está listo para ayudarte a elegir el curso perfecto para tus objetivos profesionales. Te responderemos en menos de 24 horas.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-method-info">
                    <div className="contact-method-label">Email</div>
                    <div className="contact-method-value">info@excelexpertos.com</div>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📱</div>
                  <div className="contact-method-info">
                    <div className="contact-method-label">WhatsApp</div>
                    <div className="contact-method-value">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div className="contact-method-info">
                    <div className="contact-method-label">Chat en Vivo</div>
                    <div className="contact-method-value">Lun-Vie 9AM-6PM EST</div>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">🌍</div>
                  <div className="contact-method-info">
                    <div className="contact-method-label">Zona Horaria</div>
                    <div className="contact-method-value">GMT-5 (EST)</div>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">📸</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">💼</a>
                <a href="#" className="social-link">📺</a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Solicita Información</h3>
              <p>Completa el formulario y te enviaremos información personalizada sobre nuestros cursos.</p>

              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-input" placeholder="Tu nombre completo" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Apellido</label>
                    <input type="text" className="form-input" placeholder="Tu apellido" required />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="tu@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Teléfono</label>
                    <input type="tel" className="form-input" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Nivel de Excel</label>
                  <select className="form-select" required>
                    <option value="">Selecciona tu nivel actual</option>
                    <option value="principiante">Principiante - Nunca he usado Excel</option>
                    <option value="basico">Básico - Uso funciones simples</option>
                    <option value="intermedio">Intermedio - Manejo tablas dinámicas</option>
                    <option value="avanzado">Avanzado - Uso macros y VBA</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Curso de Interés</label>
                  <select className="form-select" required>
                    <option value="">¿Qué curso te interesa más?</option>
                    <option value="basico">Excel Básico Profesional - $49</option>
                    <option value="avanzado">Excel Avanzado para Profesionales - $149</option>
                    <option value="master">Excel + Power BI Master - $299</option>
                    <option value="todos">Quiero información de todos los cursos</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label">Mensaje</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Cuéntanos sobre tus objetivos profesionales y cómo Excel puede ayudarte..."
                    rows="4"
                  ></textarea>
                </div>

                <div className="form-checkbox-group">
                  <input type="checkbox" id="newsletter" className="form-checkbox" />
                  <label htmlFor="newsletter" className="form-checkbox-label">
                    Quiero recibir tips gratuitos de Excel y ofertas especiales por email
                  </label>
                </div>

                <div className="form-checkbox-group">
                  <input type="checkbox" id="terms" className="form-checkbox" required />
                  <label htmlFor="terms" className="form-checkbox-label">
                    Acepto los <a href="#">términos y condiciones</a> y la <a href="#">política de privacidad</a>
                  </label>
                </div>

                <button type="submit" className="form-submit">
                  Solicitar Información Gratuita
                </button>
              </form>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section">
            <div className="cta-content">
              <h3 className="cta-title">¿Prefieres Hablar Directamente?</h3>
              <p className="cta-description">
                Agenda una consulta gratuita de 15 minutos y te ayudaremos a elegir el curso perfecto para tus objetivos
              </p>
              <div className="cta-buttons">
                <a href="#" className="cta-button primary">
                  📅 Agendar Consulta Gratuita
                </a>
                <a href="#" className="cta-button secondary">
                  💬 Chat por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Contactos;
