import Clientes from './../../components/Common/Clientes'
import Header from './../../components/Nosotros/Header'
import Intro from './../../components/Nosotros/Intro'
import Caracteristicas from './../../components/Nosotros/Caracteristicas'
import BackgroundImg from './../../components/Nosotros/BackgroundImg'
import MsgFinal from './../../components/Nosotros/MsgFinal'

import {
  getIconosIconosCaracteristicasA,
  getIconosIconosCaracteristicasB,
  getLogos,
  getimgsGaleria,
} from './../../utils/dataUtils.js'

import './styles.css'

export default function Nosotros() {
  const iconosCaracteristicasA = getIconosIconosCaracteristicasA(
    'iconosCaracteristicasA',
  )
  const iconosCaracteristicasB = getIconosIconosCaracteristicasB(
    'iconosCaracteristicasB',
  )
  const logos = getLogos('logos')
  const imgsGaleria = getimgsGaleria('imgsGaleria')

  return (
    <section className='nosotros page'>
      <Header />
      <Intro />
      <Caracteristicas iconos={iconosCaracteristicasA} />
      <BackgroundImg />
      <Caracteristicas lastClass='last' iconos={iconosCaracteristicasB} />
      <MsgFinal />
      <Clientes logos={logos} imgsGaleria={imgsGaleria} />
    </section>
  )
}
