import { Home } from "./Pages/Home"

import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const Alumno = {
    nombreCompleto: "Santiago Maza",
    edad: 24,
    carrera: "Tecnicatura Universitaria en Programación",
    universidad: "Universidad Tecnológica Nacional de Tucumán",
    puesto: "Desarrollador Full-Stack"
  }
  
  return (
    <>
      <Home {...Alumno}/>
    </>
  )
}

export default App