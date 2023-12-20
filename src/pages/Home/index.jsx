import './styles.css'

import HeaderVideo from './../../components/Home/HeaderVideo'
import Servicios from './../../components/Home/Servicios'
import FajaExperiencia from './../../components/Home/FajaExperiencia'
import Iconos from './../../components/Common/Iconos'
import ArrivoBuques from './../../components/Home/ArrivoBuques'
import Formulario from './../../components/Common/Formulario'
import Tracking from './../../components/Home/Tracking'
import Clientes from './../../components/Common/Clientes'

import {
  getServicios,
  getLogos,
  getimgsGaleria,
} from './../../utils/dataUtils.js'

export default function Home() {
  const servicios = getServicios('servicios')
  const logos = getLogos('logos')
  const imgsGaleria = getimgsGaleria('imgsGaleria')

  return (
    <section className='home page'>
      <HeaderVideo />
      <Servicios servicios={servicios} />
      <FajaExperiencia />
      <Iconos />
      <ArrivoBuques />
      <Formulario />
      <Tracking />
      <Clientes logos={logos} imgsGaleria={imgsGaleria} />
    </section>
  )
}
