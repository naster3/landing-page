import React from 'react';

const Servicio = () => {
    return (
        <div>
                  {/* Services Section */}
      <section id="servicios" className="services-section">
        <div className="services-container">
          <div className="services-header">
            <span className="section-label">Nuestros Cursos</span>
            <h2 className="section-title">Domina Excel a tu Ritmo</h2>
            <p className="section-description">
              Elige el curso que mejor se adapte a tu nivel y objetivos profesionales. Todos incluyen certificación y acceso de por vida.
            </p>
          </div>

          <div className="services-grid">
            {/* Curso Básico */}
            <div className="service-card">
              <div className="service-header-content">
                <span className="service-level">Principiante</span>
                <h3 className="service-title">Excel Básico Profesional</h3>
                <p className="service-description">
                  Perfecto para quienes inician. Aprende las bases sólidas de Excel para uso profesional y personal.
                </p>
                <div className="service-price">$49 USD</div>
              </div>

              <ul className="service-features">
                <li>Fundamentos de Excel y navegación</li>
                <li>Fórmulas básicas y referencias</li>
                <li>Formato de celdas y tablas</li>
                <li>Gráficos simples y efectivos</li>
                <li>Funciones SUMA, PROMEDIO, CONTAR</li>
                <li>20 horas de video contenido</li>
                <li>Ejercicios prácticos incluidos</li>
                <li>Certificado de finalización</li>
              </ul>

              <a href="#" className="service-button">Comenzar Ahora</a>
            </div>

            {/* Curso Intermedio - Featured */}
            <div className="service-card featured">
              <div className="popular-badge">Más Popular</div>
              <div className="service-header-content">
                <span className="service-level">Intermedio</span>
                <h3 className="service-title">Excel Avanzado para Profesionales</h3>
                <p className="service-description">
                  El curso más completo. Conviértete en el experto de Excel que toda empresa busca.
                </p>
                <div className="service-price">$149 USD</div>
              </div>

              <ul className="service-features">
                <li>Funciones avanzadas (BUSCARV, INDICE, COINCIDIR)</li>
                <li>Tablas dinámicas y gráficos dinámicos</li>
                <li>Análisis de datos y estadísticas</li>
                <li>Macros básicas y automatización</li>
                <li>Dashboard profesionales</li>
                <li>Power Query para importar datos</li>
                <li>50 horas de contenido premium</li>
                <li>Plantillas profesionales incluidas</li>
                <li>Soporte directo por 3 meses</li>
              </ul>

              <a href="#" className="service-button">¡Inscríbete Ya!</a>
            </div>

            {/* Curso Experto */}
            <div className="service-card">
              <div className="service-header-content">
                <span className="service-level">Experto</span>
                <h3 className="service-title">Excel + Power BI Master</h3>
                <p className="service-description">
                  Para profesionales que buscan el máximo nivel. Incluye Power BI y análisis avanzado de datos.
                </p>
                <div className="service-price">$299 USD</div>
              </div>

              <ul className="service-features">
                <li>VBA y macros avanzadas</li>
                <li>Power BI desde cero a experto</li>
                <li>Análisis predictivo y estadístico</li>
                <li>Conexiones a bases de datos</li>
                <li>Dashboards interactivos avanzados</li>
                <li>Automatización de reportes</li>
                <li>80 horas de contenido exclusivo</li>
                <li>Proyectos empresariales reales</li>
                <li>Mentoría personalizada 1-a-1</li>
                <li>Acceso a comunidad VIP</li>
              </ul>

              <a href="#" className="service-button">Conviértete en Experto</a>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="bonus-section">
            <h3 className="bonus-title">🎯 Todos los Cursos Incluyen</h3>
            <p className="bonus-description">
              Beneficios adicionales que hacen la diferencia en tu experiencia de aprendizaje
            </p>
            
            <div className="bonus-features">
              <div className="bonus-feature">Acceso de por vida</div>
              <div className="bonus-feature">Actualizaciones gratuitas</div>
              <div className="bonus-feature">Certificado oficial</div>
              <div className="bonus-feature">Soporte técnico</div>
              <div className="bonus-feature">Garantía 30 días</div>
              <div className="bonus-feature">Descargables y plantillas</div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Servicio;
