import '../styles/main.css'

export const Main = ({ nombreAlumno, carrera, univ }) => {
  return (
    <>
      <div className="container d-flex justify-content-center text-center flex-wrap">
        <p>¡Hola a todos! Mi nombre es <strong>{nombreAlumno}</strong>, estudiante de la carrera {carrera} de la {univ}</p>
        <p className='segundo-texto'>Sin tener demasiada experiencia en este campo, estoy constantemente buscando información sobre nuevas tecnologías o de las que ya manejo pero que me gustaría perfeccionar.</p>
      </div>
      <div className="container-fluid">
        <span className='fst-italic fst-underlined text-uppercase text-decoration-underline pruebaTexto'>Proyectos</span>
      </div>
    </>
  )
}