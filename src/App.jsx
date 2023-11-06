import { Contexto } from './context/Contexto'
import { Equipo } from './pages/Equipo'
import { Inicio } from './pages/Inicio'
import { Proyectos } from './pages/Proyectos'
import { Servicios } from './pages/Servicios'


function App() {
  return(
    <>
    <Contexto>
      <Inicio/>
      <Servicios/>
      <Proyectos/>
      <Equipo/>
    </Contexto>
    </>
  )
}

export default App
