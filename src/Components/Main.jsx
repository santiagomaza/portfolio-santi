import { ProyectoEcommerce } from './ProyectoEcommerce'
import { ProyectoKEB } from './ProyectoKEB'
import { ProyectoTFZ } from './ProyectoTFZ'
import { TecnologiasUsadas } from './TecnologiasUsadas'
import '../styles/main.css'

export const Main = (props) => {
  const { nombreAlumno, carrera, univ } = props
  const { nombreproyEcom, descripcionproyEcom, tecnologiasproyEcom, urlproyEcom, urlimagenEcom, urlgithubEcom, textoaltEcom } = props
  const { nombreproyKEB, descripcionproyKEB, tecnologiasproyKEB, urlproyKEB, urlgithubKEB, urlimagenKEB, textoaltKEB } = props
  const { nombreproyTFZ, descripcionproyTFZ, tecnologiasproyTFZ, urlproyTFZ, urlgithubTFZ, urlimagenTFZ, textoaltTFZ } = props

  return (
    <div className='cuerpoProyecto'>
      <div className="container d-flex justify-content-center text-center flex-wrap">
        <p>¡Hola a todos! Mi nombre es <strong>{nombreAlumno}</strong>, estudiante de la carrera {carrera} de la {univ}</p>
        <p className='segundo-texto'>Sin tener demasiada experiencia en este campo, estoy constantemente buscando información sobre nuevas tecnologías o de las que ya manejo pero que me gustaría perfeccionar.</p>
      </div>
      <div className='border-bottom border-dark mb-3 mt-3 w-50 m-auto'></div>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <span className='fst-italic text-uppercase fs-3 subtituloProyecto mb-3'>Proyectos</span>
        </div>
        <ProyectoEcommerce
          nombreproy = {nombreproyEcom}
          descripcionproy = {descripcionproyEcom}
          tecnologiasproy = {tecnologiasproyEcom}
          urlproy = {urlproyEcom}
          urlimagen = {urlimagenEcom}
          urlgithub = {urlgithubEcom}
          textoalt = {textoaltEcom}
        />
        <ProyectoKEB
          nombreproy = {nombreproyKEB}
          descripcionproy = {descripcionproyKEB}
          tecnologiasproy = {tecnologiasproyKEB}
          urlproy = {urlproyKEB}
          urlimagen = {urlimagenKEB}
          urlgithub = {urlgithubKEB}
          textoalt = {textoaltKEB}
        />
        <ProyectoTFZ 
          nombreproy = {nombreproyTFZ}
          descripcionproy = {descripcionproyTFZ}
          tecnologiasproy = {tecnologiasproyTFZ}
          urlproy = {urlproyTFZ}
          urlimagen = {urlimagenTFZ}
          urlgithub = {urlgithubTFZ}
          textoalt = {textoaltTFZ}
        />
      </div>
      <div className='border-bottom border-dark mb-3 mt-3 w-50 m-auto'></div>
      <div className="container-fluid d-flex justify-content-center">
        <span className='fst-italic text-uppercase fs-3 subtituloProyecto2 mb-3'>Tecnologias</span>
      </div>
      <div className='d-flex justify-content-center pb-4'>
        <TecnologiasUsadas />
      </div>
    </div>
  )
}