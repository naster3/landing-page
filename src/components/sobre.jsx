import React from 'react';

const Sobre = () => {
    return (
        <div>
            {/* About Section */}
      <section id="sobre-nosotros" className="about-section">
        <div className="about-container">
          <div className="about-header">
            <span className="section-label">Sobre Nosotros</span>
            <h2 className="section-title">Especialistas en Excel</h2>
            <p className="section-description">
              Transformamos profesionales con cursos de Excel que van desde lo básico hasta técnicas avanzadas para el análisis de datos y automatización
            </p>
          </div>

          <div className="about-content">
            <div className="about-text">
              <h3>Dominamos Excel para que tú también lo hagas</h3>
              <p>
                Con más de <span className="highlight">10 años de experiencia</span> en capacitación empresarial, hemos ayudado a miles de profesionales a dominar Excel y potenciar su carrera profesional.
              </p>
              <p>
                Nuestros cursos están diseñados para <span className="highlight">profesionales ocupados</span> que necesitan resultados rápidos y efectivos. Desde fórmulas básicas hasta macros avanzadas, dashboard interactivos y análisis de datos con Power BI.
              </p>
              <p>
                Creemos que Excel no es solo una herramienta, es el <span className="highlight">superpoder</span> que todo profesional necesita para destacar en su trabajo y tomar decisiones basadas en datos.
              </p>
            </div>

            <div className="about-image">
              <div className="about-image-container">
                <div className="about-image-placeholder">
                  <div className="excel-icon">XL</div>
                  <div>Instructor explicando</div>
                  <div>funciones de Excel</div>
                  <small style={{marginTop: '1rem', opacity: 0.7}}>600x400px recomendado</small>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">Estudiantes</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15</div>
              <div className="stat-label">Cursos Activos</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfacción</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Años Experiencia</div>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3 className="feature-title">Análisis de Datos</h3>
              <p className="feature-description">
                Aprende a crear dashboards profesionales, tablas dinámicas avanzadas y análisis predictivos que impresionen a tu equipo.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Automatización</h3>
              <p className="feature-description">
                Domina las macros y VBA para automatizar tareas repetitivas y convertirte en el experto de Excel de tu oficina.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3 className="feature-title">Casos Reales</h3>
              <p className="feature-description">
                Practica con ejercicios basados en situaciones empresariales reales que podrás aplicar inmediatamente en tu trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Sobre;
