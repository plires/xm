import Header from './../../components/Soluciones/Header'
import Intro from './../../components/Soluciones/Intro'
import CaracteristicasSoluciones from './../../components/Soluciones/CaracteristicasSoluciones'
import Imagen from './../../components/Soluciones/Imagen'
import FajaContacto from './../../components/Common/FajaContacto'
import Iconos from './../../components/Common/Iconos'
import Formulario from './../../components/Common/Formulario'

import { getIconosCaracteristicasSoluciones } from './../../utils/dataUtils.js'

import './styles.css'

export default function Soluciones() {
  const iconos = getIconosCaracteristicasSoluciones('iconos')

  return (
    <section className='soluciones page'>
      <Header />
      <Intro />
      <CaracteristicasSoluciones iconos={iconos} />
      <Imagen />
      <FajaContacto />
      <Iconos />
      <Formulario />
    </section>
  )
}
