import { Header } from '../Components/Header'
import { Main } from '../Components/Main'
import { Footer } from '../Components/Footer'
import '../styles/home.css'

export const Home = (props) => {
  const { nombreCompleto, carrera, universidad, puesto } = props
  const { nombreproyEcom, descripcionproyEcom, tecnologiasproyEcom, urlproyEcom, urlimagenEcom, urlgithubEcom, textoaltEcom } = props
  const { nombreproyKEB, descripcionproyKEB, tecnologiasproyKEB, urlproyKEB, urlgithubKEB, urlimagenKEB, textoaltKEB } = props
  const { nombreproyTFZ, descripcionproyTFZ, tecnologiasproyTFZ, urlproyTFZ, urlgithubTFZ, urlimagenTFZ, textoaltTFZ } = props

  return (
    <>
      <Header nombreAlumno={nombreCompleto} puesto = {puesto}/>
      <Main 
        nombreAlumno = {nombreCompleto} 
        carrera = {carrera} 
        univ = {universidad}

        nombreproyEcom = {nombreproyEcom}
        descripcionproyEcom = {descripcionproyEcom}
        tecnologiasproyEcom = {tecnologiasproyEcom}
        urlproyEcom = {urlproyEcom}
        urlimagenEcom = {urlimagenEcom}
        urlgithubEcom = {urlgithubEcom}
        textoaltEcom = {textoaltEcom}

        nombreproyKEB = {nombreproyKEB}
        descripcionproyKEB = {descripcionproyKEB}
        tecnologiasproyKEB = {tecnologiasproyKEB}
        urlproyKEB = {urlproyKEB}
        urlgithubKEB = {urlgithubKEB}
        urlimagenKEB = {urlimagenKEB}
        textoaltKEB = {textoaltKEB}

        nombreproyTFZ = {nombreproyTFZ}
        descripcionproyTFZ = {descripcionproyTFZ}
        tecnologiasproyTFZ = {tecnologiasproyTFZ}
        urlproyTFZ = {urlproyTFZ}
        urlgithubTFZ = {urlgithubTFZ}
        urlimagenTFZ = {urlimagenTFZ}
        textoaltTFZ = {textoaltTFZ}
        />
      <Footer />
    </>
  )
}