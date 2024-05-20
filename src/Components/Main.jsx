import '../styles/main.css'

export const Main = () => {
  return (
    <>
      <div className="container d-flex justify-content-center text-center flex-wrap">
        <p>¡Hola a todos! Mi nombre es <strong>Santiago Maza</strong>, estudiante de la carrera Tecnicatura Universitaria en Programación de la Universidad Tecnológica Nacional de Tucumán.</p>
        <p className='segundo-texto'>Sin tener demasiada experiencia en este campo, estoy constantemente buscando información sobre nuevas tecnologías o de las que ya manejo pero que me gustaría perfeccionar.</p>
      </div>
      <div className="container-fluid">
        <span className='fst-italic fst-underlined text-uppercase text-decoration-underline pruebaTexto'>Proyectos</span>
      </div>
    </>
  )
}
