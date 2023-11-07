import React from 'react';
import '../css/Conocenos.css';
import conocenosImagen from '../assets/vectorEquipo.svg'

// Este componente muestra el logo de la empresa
function Logo() {
  return (
    <div className="logo">
      <img src={conocenosImagen} alt="Keliant Dev" />
    </div>
  );
}

// Este componente muestra el texto de la sección
function Text() {
  return (
    <div className="text">
      <h1>Conoce más de nosotros</h1>
      <p>
        Somos Keliant Dev, una empresa dedicada al diseño y desarrollo de
        páginas web, aplicaciones móviles, software y otros productos
        tecnológicos en Santa Marta, Magdalena. Contamos con un equipo de
        profesionales capacitados y creativos que te ofrecen soluciones
        innovadoras y de calidad para tus proyectos. Nuestra misión es
        satisfacer las necesidades de nuestros clientes y superar sus
        expectativas.
      </p>
    </div>
  );
}

// Este componente muestra la sección completa
function Conocenos() {
  return (
    <div className="section" id='Conocenos'>
      <Logo />
      <Text />
    </div>
  );
}

export default Conocenos;
