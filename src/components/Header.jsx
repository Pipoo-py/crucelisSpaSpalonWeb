import { Menu } from "lucide-react"
import { X } from "lucide-react"
import { useState } from "react";
import "../styles/Header.css"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav__container">
          <ul className={`nav__ul ${isMobileMenuOpen ? 'nav__ul--open' : ''}`}>
            <li><a href="/#servicios">Servicios</a></li>
            <li><a href="/#contacto">Contacto</a></li>
            <li><a href="/#nosotros">Nosotros</a></li>
            <li><a href="/#footer">Ubicación</a></li>
            <li><a href="/">Inicio</a></li>
            <li><a href="/gallery">Galería</a></li>
          </ul>
          <div className="nav__mobile-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>
    </header>
  );
};
