import "./Navbar.css";
import { useState } from "react";
import * as React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const abrirMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header>
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1729464646/iconoCod_s9clud.png"
            alt="logo"
          />
          <p className="parrafoUno">Carla Peñalva</p>
        </div>
        <div className="menu">
          <button onClick={abrirMenu}>&#9776;</button>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>Inicio</li>
            <li>Sobre mí</li>
            <li>Proyectos</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className="sections">
          <ul>
            <li>Sobre mi</li>
            <li>Skills</li>
            <li>Proyectos</li>
            <li>Contacto</li>
          </ul>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
