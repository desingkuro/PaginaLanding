import '../css/styleInicio.css'

export function Inicio(){
    return(
        <main className="contenedorPrincipal">
            <header className='cont_menuBar'>
                <nav className='menuBar'>
                    <ul>
                        <li><a href="#" id="">Inicio</a></li>
                        <li><a href="#" id="">Servicios</a></li>
                        <li><a href="#" id="">Historia</a></li>
                        <li><a href="#" id="">Proyectos</a></li>
                        <li><a href="#" id="">Equipo</a></li>
                        <li><a href="#" id="">Contacto</a></li>
                    </ul>
                </nav>
            </header>
            <div className='principalPresentacion'>
                <h1>Desarrolla tu web con nosotros!</h1>
                <p>Has que el mundo conosca tu negocio</p>
                <button>conoce mas de nosotros</button>
            </div>
        </main>
    )
}