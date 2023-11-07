import { Contexto } from './context/Contexto'
import Conocenos from './pages/Conocenos'
import Contact from './pages/Contact'
import { Equipo } from './pages/Equipo'
import Footer from './pages/Footer'
import { Inicio } from './pages/Inicio'
import { Proyectos } from './pages/Proyectos'
import { Servicios } from './pages/Servicios'


function App() {
  return(
    <>
    <Contexto>
      <Inicio/>
      <Servicios/>
      {/*<Proyectos/>*/}
      <Conocenos/>
      <Equipo/>
      <Contact/>
      <Footer/>
    </Contexto>
    </>
  )
}

export default App
