import yo from '../assets/yo.jpg'
import '../styles/header.css'

export const Header = ({nombreAlumno, puesto}) => {
  return (
    <div className='color d-flex justify-content-center pb-4'>
      <div className="d-flex justify-content-center mt-4 contenedor">
        <img src={yo} alt="yo" style={{height: "200px", width: "200px"}} className='imagen'/>
        <div className='d-flex align-items-center flex-wrap'>
          <h1 className='mx-5 text-uppercase'>{nombreAlumno}</h1>
          <h4 className='mx-5'>{puesto}</h4>
        </div>
      </div>
    </div>
  )
}
