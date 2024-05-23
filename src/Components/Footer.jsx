import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import '../styles/footer.css'

export const Footer = () => {
  return (
    <footer className="footer h-100">
      <div className="d-flex flex-column align-items-center mb-3">
        <p className="mt-4 bg-transparent text-light fs-3 text-uppercase">Redes Sociales</p>
        <a href="https://github.com/santiagomaza" target="_blank" className="bg-transparent text-light text-uppercase mb-3 text-decoration-none"><FaGithub className="bg-transparent fs-2 me-2"/>Github</a>
        <a href="https://www.linkedin.com/in/santiago-maza99" target="_blank" className="bg-transparent text-uppercase text-light text-decoration-none"><FaLinkedin className="bg-transparent fs-2 me-2"/>LinkedIn</a>
      </div>
      <p className="text-center text-light fs-6">&copy; Desarrollado por <em className="fst-italic">Santiago Maza</em></p>
    </footer>
  )
}