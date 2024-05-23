import { Header } from '../Components/Header'
import { Main } from '../Components/Main'
import '../styles/home.css'

export const Home = (props) => {
  const { nombreCompleto, carrera, universidad, puesto } = props

  return (
    <>
      <Header nombreAlumno={nombreCompleto} puesto = {puesto}/>
      <Main nombreAlumno = {nombreCompleto} carrera = {carrera} univ = {universidad}/>
    </>
  )
}