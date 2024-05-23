import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

export const ProyectoEcommerce = (props) => {
  const { nombreproy, descripcionproy, tecnologiasproy, urlproy, urlimagen, urlgithub, textoalt } = props

  return (
    <div className="row mb-3">
      <div className='col-lg-5'>
        <h5 className='d-block fw-bold'>{nombreproy}</h5>
        <p className='fs-6 lh-sm h-25'>{descripcionproy}</p>
        <span className='fw-bold'>Tecnologías Usadas:</span>
        <p className='fst-italic font-monospace letter-spacing-1'>{tecnologiasproy}</p>
        <div className="d-flex justify-content-end">
          <a href={urlproy} target="_blank" rel="noreferrer" className='btn btn-outline-dark me-2'><CiGlobe className="me-2 fs-5 bg-transparent"/>Ver Proyecto</a>
          <a href={urlgithub} target="_blank" rel="noreferrer" className='btn btn-outline-dark'><FaGithub className="me-2 fs-5 bg-transparent"/>Ir a Github</a>
        </div>
      </div>
      <img src={urlimagen} alt={textoalt} style={{width: "750px", height: "350px"}}/>
    </div>
  )
}
