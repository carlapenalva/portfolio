import "./Navbar.css";
import * as React from "react";

const Navbar = () => {
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
          <img
            src="https://res.cloudinary.com/dvuap85l1/image/upload/v1729468487/menu_aqytqq.png"
            alt="menu"
          />
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
