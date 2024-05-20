import yo from '../assets/yo.jpg'
import '../styles/header.css'

export const Header = () => {
  return (
    <div className='d-flex justify-content-center mb-4'>
      <div className="d-flex justify-content-center mt-4 contenedor">
        <img src={yo} alt="yo" style={{height: "200px", width: "200px"}} className='imagen'/>
        <div className='d-flex align-items-center flex-wrap'>
          <h1 className='mx-5'>SANTIAGO MAZA</h1>
          <h4 className='mx-5'>Desarrollador Full-Stack</h4>
        </div>
      </div>
    </div>
  )
}
