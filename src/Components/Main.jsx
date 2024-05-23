import { Proyectos } from './Proyectos'
import { ecomrcProy, kiosquitoelbarbaProy, theFilmZoneProy } from '../constants/descripcionesProyectos'
import '../styles/main.css'
import { TecnologiasUsadas } from './TecnologiasUsadas'

export const Main = ({ nombreAlumno, carrera, univ }) => {
  return (
    <>
      <div className="container d-flex justify-content-center text-center flex-wrap">
        <p>¡Hola a todos! Mi nombre es <strong>{nombreAlumno}</strong>, estudiante de la carrera {carrera} de la {univ}</p>
        <p className='segundo-texto'>Sin tener demasiada experiencia en este campo, estoy constantemente buscando información sobre nuevas tecnologías o de las que ya manejo pero que me gustaría perfeccionar.</p>
      </div>
      <div className='border-bottom border-dark mb-3 mt-3 w-50 m-auto'></div>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <span className='fst-italic fst-underlined text-uppercase text-decoration-underline subtituloProyecto mb-3'>Proyectos</span>
        </div>
        <Proyectos {...ecomrcProy}/>
        <Proyectos {...kiosquitoelbarbaProy}/>
        <Proyectos {...theFilmZoneProy}/>
      </div>
      <div className='border-bottom border-dark mb-3 mt-3 w-50 m-auto'></div>
      <div className="container-fluid d-flex justify-content-center">
        <span className='fst-italic fst-underlined text-uppercase text-decoration-underline subtituloProyecto2 mb-3'>Tecnologias</span>
      </div>
      <div className='d-flex justify-content-center mb-2'>
        <TecnologiasUsadas />
      </div>
    </>
  )
}