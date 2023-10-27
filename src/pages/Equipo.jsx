import { CardPerson } from '../Components/CardPerson'
import '../css/styleEquipo.css'

export function Equipo(){
    return(
        <section className="seccionEquipo" id='Equipo'>
            <div className='headerEquipo'>
                <h2>Equipo de trabajo</h2>
            </div>
            <div className='equipoContainer'>
                <CardPerson/>
                <CardPerson/>
                <CardPerson/>
            </div>
        </section>
    )
}