import { useState } from 'react'
import '../css/styleInicio.css'

export function Inicio(){
    const[menu,setMenu]=useState('cont_menuBar');
    const[menuIcon,setMenuIcon]=useState('menu__icon');
    return(
        <main className="contenedorPrincipal" id='Inicio'>
            <div className="background">
                <button className={menuIcon} onClick={()=>{
                    if(menu=='cont_menuBar'){
                        setMenu('cont_menuBar cerrado')
                        setMenuIcon("menu__icon_abierto")
                    }else{
                        setMenuIcon("menu__icon")
                        setMenu('cont_menuBar')
                    }
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <header className={menu}>
                <nav className='menuBar'>
                    <ul>
                        <li><a href="#Inicio" id="">Inicio</a></li>
                        <li><a href="#Servicios" id="">Servicios</a></li>
                        {<li><a href="#Conocenos" id="">Conocenos</a></li>}
                        <li><a href="#Equipo" id="">Equipo</a></li>
                        <li><a href="#Contacto" id="">Contacto</a></li>
                    </ul>
                </nav>
            </header>
            <div className='principalPresentacion'>
                <h1>¡Desarrolla tu web con nosotros!</h1>
                <p>Has que el mundo conozca tu negocio</p>
                <button>Conoce mas de nosotros</button>
            </div>
        </main>
    )
}