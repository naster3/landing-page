import React from 'react';

const Inicio = () => {
    return (
        <div>
            {/* Hero Section */}
      <section className="hero-section">
        <div className="floating-elements">
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
          <div className="floating-circle"></div>
        </div>
        
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transforma tu Negocio Digital
            </h1>
            <p className="hero-subtitle">
              Creamos experiencias digitales extraordinarias que conectan con tu audiencia y hacen crecer tu marca. Desde diseño web hasta estrategias de marketing digital.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn btn-primary">
                Comenzar Proyecto
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                Ver Portfolio
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-image-placeholder">
                Imagen Destacada
                <br />
                <small>1200x800px recomendado</small>
              </div>
            </div>
          </div>
        </div>
      </section>

        </div>
    );
}

export default Inicio;
