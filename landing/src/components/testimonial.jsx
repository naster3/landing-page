import React from 'react';

const Testimonial = () => {
    return (
        <div>
            {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <span className="section-label">Testimonios</span>
            <h2 className="section-title">Historias de Éxito Reales</h2>
            <p className="section-description">
              Descubre cómo nuestros estudiantes han transformado su carrera profesional dominando Excel
            </p>
          </div>

          <div className="testimonials-grid">
            {/* Testimonio 1 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">AM</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Ana María González</div>
                  <div className="testimonial-role">Analista Financiera</div>
                  <div className="testimonial-company">Banco Internacional</div>
                </div>
              </div>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="testimonial-quote">
                El curso de Excel Avanzado cambió completamente mi manera de trabajar. Lo que antes me tomaba horas, ahora lo resuelvo en minutos con macros y tablas dinámicas. Mi jefe quedó impresionado con los reportes automatizados.
              </div>
              <div className="testimonial-result">
                <div className="testimonial-result-label">Resultado:</div>
                Ascenso a Gerente de Análisis + 40% aumento salarial
              </div>
            </div>

            {/* Testimonio 2 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">CR</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Carlos Rodríguez</div>
                  <div className="testimonial-role">Emprendedor</div>
                  <div className="testimonial-company">TechStart Solutions</div>
                </div>
              </div>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="testimonial-quote">
                Gracias al curso Master de Excel + Power BI, pude crear dashboards profesionales para mis clientes. Ahora ofrezco servicios de consultoría en análisis de datos y he triplicado mis ingresos como freelancer.
              </div>
              <div className="testimonial-result">
                <div className="testimonial-result-label">Resultado:</div>
                Creó su consultora de datos - $8,000 USD/mes
              </div>
            </div>

            {/* Testimonio 3 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">MJ</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">María José Herrera</div>
                  <div className="testimonial-role">Coordinadora RRHH</div>
                  <div className="testimonial-company">Corporación Global</div>
                </div>
              </div>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="testimonial-quote">
                Era una principiante total en Excel. El curso básico me dio la confianza para manejar bases de datos de empleados y crear reportes que antes tenía que pedir al área de IT. Ahora soy más independiente y productiva.
              </div>
              <div className="testimonial-result">
                <div className="testimonial-result-label">Resultado:</div>
                Reducción del 70% en tiempo de reportes mensuales
              </div>
            </div>

            {/* Testimonio 4 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">DS</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Diego Silva</div>
                  <div className="testimonial-role">Controller Financiero</div>
                  <div className="testimonial-company">Industrias Modernas</div>
                </div>
              </div>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="testimonial-quote">
                Las técnicas avanzadas de Excel me permitieron automatizar todo el proceso de cierre contable. Los dashboards financieros que creé impresionaron tanto a la gerencia que me nombraron líder del proyecto de digitalización.
              </div>
              <div className="testimonial-result">
                <div className="testimonial-result-label">Resultado:</div>
                Liderazgo de proyecto + reconocimiento ejecutivo
              </div>
            </div>

            {/* Testimonio 5 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">LM</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Lucía Mendoza</div>
                  <div className="testimonial-role">Gerente de Ventas</div>
                  <div className="testimonial-company">Retail Excellence</div>
                </div>
              </div>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="testimonial-quote">
                Con Power BI aprendí a crear dashboards de ventas en tiempo real. Ahora puedo tomar decisiones basadas en datos y mi equipo ha mejorado un 25% en performance. La inversión se pagó sola en el primer mes.
              </div>
              <div className="testimonial-result">
                <div className="testimonial-result-label">Resultado:</div>
                +25% performance del equipo - ROI inmediato
              </div>
            </div>

            {/* Testimonio 6 */}
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">JC</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">Javier Castillo</div>
                  <div className="testimonial-role">Estudiante Universitario</div>
                  <div className="testimonial-company">Universidad Nacional</div>
                </div>
              </div>
              <div className="testimonial-rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="testimonial-quote">
                Tomé el curso mientras estudiaba administración. Las habilidades en Excel me ayudaron a conseguir una práctica profesional en una multinacional. Ahora tengo una ventaja competitiva sobre mis compañeros de clase.
              </div>
              <div className="testimonial-result">
                <div className="testimonial-result-label">Resultado:</div>
                Práctica profesional en multinacional antes de graduarse
              </div>
            </div>
          </div>

          {/* Stats Showcase */}
          <div className="stats-showcase">
            <h3 className="stats-showcase-title">🏆 Impacto Comprobado</h3>
            <p className="stats-showcase-description">
              Los números hablan por sí solos. Nuestros estudiantes logran resultados extraordinarios.
            </p>
            
            <div className="success-stats">
              <div className="success-stat">
                <div className="success-stat-number">87%</div>
                <div className="success-stat-label">Obtuvieron Ascenso</div>
              </div>
              <div className="success-stat">
                <div className="success-stat-number">+45%</div>
                <div className="success-stat-label">Aumento Salarial Promedio</div>
              </div>
              <div className="success-stat">
                <div className="success-stat-number">92%</div>
                <div className="success-stat-label">Recomiendan el Curso</div>
              </div>
              <div className="success-stat">
                <div className="success-stat-number">30 días</div>
                <div className="success-stat-label">Tiempo Promedio de Impacto</div>
              </div>
            </div>
          </div>

          {/* Companies Section */}
          <div className="companies-section">
            <h4 className="companies-title">Nuestros estudiantes trabajan en:</h4>
            <div className="companies-grid">
              <div className="company-logo">Microsoft</div>
              <div className="company-logo">Amazon</div>
              <div className="company-logo">Deloitte</div>
              <div className="company-logo">KPMG</div>
              <div className="company-logo">Coca-Cola</div>
              <div className="company-logo">IBM</div>
            </div>
          </div>
        </div>
      </section>
        </div>
    );
}

export default Testimonial;
