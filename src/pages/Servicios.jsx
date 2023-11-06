import { useContext } from 'react'
import '../css/styleServicios.css'
import { Api } from '../context/Contexto'
import { CardServicios } from '../Components/CardServicios';

export function Servicios(){
    const {servicios} = useContext(Api);
    return(
        <section className='containerPrincipal' id='Servicios'>
            <div className='encabezado'>
                <h2>Nuestros Servicios</h2>
            </div>
            <div className='contenedorServicios'>
                {servicios.map((e,i)=>{
                    return(
                        <CardServicios key={i} titulo={e.Titulo}/>
                    )
                })}
            </div>
        </section>
    )
}