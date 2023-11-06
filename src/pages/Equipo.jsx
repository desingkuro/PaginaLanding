import { useContext } from 'react'
import { CardPerson } from '../Components/CardPerson'
import '../css/styleEquipo.css'
import { Api } from '../context/Contexto';

export function Equipo(){
    const {equipo} = useContext(Api);
    return(
        <section className="seccionEquipo" id='Equipo'>
            <div className='headerEquipo'>
                <h2>Equipo de trabajo</h2>
            </div>
            <div className='equipoContainer'>
                {equipo.map((e,i)=>{
                    return(
                        <CardPerson key={i} contacto={e.Contacto} nombre={e.Nombre} portafolio={e.Portafolio} titulo={e.Titulo}/>
                    )
                })}
            </div>
        </section>
    )
}