import { Home } from "./Pages/Home"
import ecomrcImg from './assets/ecomrc.png'
import kiosquitoelbarbaImg from './assets/kiosquitoelbarba.png'
import thefilmzoneImg from './assets/thefilmzone.png'

import 'bootstrap/dist/css/bootstrap.css'

const ecomrcProy = {
  nombreProyectoEcomRC: "eComRC",
  descripcionProyectoEcomRC: "Proyecto final individual de e-commerce realizado para la empresa Rolling Code School poniendo en práctica todos los conocimientos adquiridos.",
  tecnologiasUsadasEcomRC: "HTML, CSS, JS, Git, React, Node.js, Express.js, MongoDB",
  urlProyectoEcomRC: "https://ecom-rc.vercel.app",
  urlGithubEcomRC: "https://github.com/santiagomaza/proyectoFinal-ecomRC-front",
  urlImagenEcomRC: ecomrcImg,
  textoAltEcomRC: "bgeComRC"
}

const kiosquitoelbarbaProy = {
  nombreProyectoKEB: "Kiosquito el Barba",
  descripcionProyectoKEB: "Proyecto final grupal realizado para una asignatura de la Universidad en primer año.",
  tecnologiasUsadasKEB: "HTML, CSS, JS, Bootstrap, Json Server",
  urlProyectoKEB: "https://kiosquitoelbarba.netlify.app/index.html",
  urlGithubKEB: "https://github.com/santiagomaza/kiosquitoelbarba-Front",
  urlImagenKEB: kiosquitoelbarbaImg,
  textoAltKEB: "bgeKiosquitoElBarba"
}

const theFilmZoneProy = {
  nombreProyectoTFZ: "The Film Zone",
  descripcionProyectoTFZ: "Proyecto grupal realizado para Rolling Code School poniendo en practica conocimientos básicos de HTML y CSS y sumandole JavaScript.",
  tecnologiasUsadasTFZ: "HTML, CSS, JS, Bootstrap, Git, Json Server",
  urlProyectoTFZ: "https://thefilmzone.netlify.app/",
  urlGithubTFZ: "https://github.com/santiagomaza/jsmovies-RC",
  urlImagenTFZ: thefilmzoneImg,
  textoAltTFZ: "bgeTheFilmZone"
}

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
      <Home {...Alumno}
        nombreproyEcom = {ecomrcProy.nombreProyectoEcomRC}
        descripcionproyEcom = {ecomrcProy.descripcionProyectoEcomRC}
        tecnologiasproyEcom = {ecomrcProy.tecnologiasUsadasEcomRC}
        urlproyEcom = {ecomrcProy.urlProyectoEcomRC}
        urlgithubEcom = {ecomrcProy.urlGithubEcomRC}
        urlimagenEcom = {ecomrcProy.urlImagenEcomRC}
        textoaltEcom = {ecomrcProy.textoAltEcomRC}

        nombreproyKEB = {kiosquitoelbarbaProy.nombreProyectoKEB}
        descripcionproyKEB = {kiosquitoelbarbaProy.descripcionProyectoKEB}
        tecnologiasproyKEB = {kiosquitoelbarbaProy.tecnologiasUsadasKEB}
        urlproyKEB = {kiosquitoelbarbaProy.urlProyectoKEB}
        urlgithubKEB = {kiosquitoelbarbaProy.urlGithubKEB}
        urlimagenKEB = {kiosquitoelbarbaProy.urlImagenKEB}
        textoaltKEB = {kiosquitoelbarbaProy.textoAltKEB}

        nombreproyTFZ = {theFilmZoneProy.nombreProyectoTFZ}
        descripcionproyTFZ = {theFilmZoneProy.descripcionProyectoTFZ}
        tecnologiasproyTFZ = {theFilmZoneProy.tecnologiasUsadasTFZ}
        urlproyTFZ = {theFilmZoneProy.urlProyectoTFZ}
        urlgithubTFZ = {theFilmZoneProy.urlGithubTFZ}
        urlimagenTFZ = {theFilmZoneProy.urlImagenTFZ}
        textoaltTFZ = {theFilmZoneProy.textoAltTFZ}
      />
    </>
  )
}

export default App