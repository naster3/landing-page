import React, { useState } from 'react';
import './landing.css'
import Footer from './footer';
import Inicio from './inicio';
import Sobre from './sobre';
import Servicio from './servicio';
import Contactos from './contactos';
import Testimonial from './testimonial';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">
            <div className="logo-icon">L</div>
            <span>Mi Logo</span>
          </a>

          <nav className="nav">
            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
              <li className="nav-item">
                <a href="#inicio" className="nav-link active">Inicio</a>
              </li>
              <li className="nav-item">
                <a href="#servicios" className="nav-link">Servicios</a>
              </li>
              <li className="nav-item">
                <a href="#sobre-nosotros" className="nav-link">Sobre Nosotros</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#contacto" className="nav-link">Contacto</a>
              </li>
            </ul>

            <button 
              className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="hamburger"></div>
            </button>
          </nav>
        </div>
      </header>
      <Inicio />
<Sobre />
<Servicio />
<Testimonial />
<Contactos />
<Footer />
    </>
  );
};

export default Header;