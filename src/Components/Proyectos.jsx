import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";


export const Proyectos = (props) => {
  const { nombreProyecto, descripcionProyecto, tecnologiasUsadas, urlProyecto, urlGithub, urlImagen, textoAlt } = props

  return (
    <div className="row mb-3">
      <div className='col-lg-5'>
        <h5 className='d-block fw-bold'>{nombreProyecto}</h5>
        <p className='fs-6 lh-sm h-25'>{descripcionProyecto}</p>
        <span className='fw-bold'>Tecnologias Usadas:</span>
        <p className='fst-italic font-monospace letter-spacing-1'>{tecnologiasUsadas}</p>
        <div className="d-flex justify-content-end">
          <a href={urlProyecto} target="_blank" rel="noreferrer" className='btn btn-outline-dark me-2'><CiGlobe className="me-2 fs-5 bg-transparent"/>Ver Proyecto</a>
          <a href={urlGithub} target="_blank" rel="noreferrer" className='btn btn-outline-dark'><FaGithub className="me-2 fs-5 bg-transparent"/>Ir a Github</a>
        </div>
      </div>
      <img src={urlImagen} alt={textoAlt} style={{width: "750px", height: "350px"}}/>
    </div>
  )
}
