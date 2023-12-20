import { Link } from 'react-router-dom'

import './styles.css'

const Mudanzas = () => {
  return (
    <section id='mudanzas' className='container mudanzas'>
      <div className='row'>
        <div className='col-md-6 content_data'>
          <div data-aos='fade-up' className='content_title'>
            <h2>mudanzas</h2>
            <span></span>
          </div>
          <h3 data-aos='fade-up'>nacionales</h3>
          <h4 data-aos='fade-up'>
            SERVICIOS A: EMPRESAS E INDUSTRIAS / COMERCIOS / OFICINAS /
            PARTICULARES
          </h4>
          <ul data-aos='fade-up'>
            <li>- Mudanzas en general</li>
            <li>- Mudanzas de oficinas</li>
            <li>- Mudanza de mobiliario particular</li>
            <li>- Movimientos Internos</li>
            <li>- Mudanzas de grandes archivos</li>
            <li>- Especialidad en traslado de equipos de computación,</li>
            cajas fuertes, tesoros, casquilletes, etc.
            <li>- Provisión de canastos y/o cajas</li>
            <li>- Depósito propio para mobiliario, papelería, equipos, etc.</li>
            <li>- Trabajos con sistema aparejos, grúas, sogas, etc.</li>
            <li>- Embalaje, ya sea para traslados locales o bajo normas</li>
            Internacionales
            <li>- Servicio PUERTA A PUERTA a disposición del cliente</li>
            <li>- Presupuesto sin cargo</li>
            <li>- Seguimiento diario de la carga</li>
          </ul>
          <Link data-aos='fade-up' to='/contacto' className='transition link'>
            _solicitar información
          </Link>
        </div>
        <div className='col-md-6 content_data'>
          <h3 data-aos='fade-up'>internacionales</h3>
          <h4 data-aos='fade-up'>
            MODALIDADES: FLETES MARÍTIMOS / FLETES AÉREOS / FLETES TERRESTRES
          </h4>
          <ul data-aos='fade-up'>
            <li>- Exportación de Mercaderías</li>
            <li>- Importación de Mercaderías</li>
            <li>- Embalaje/Desembalaje</li>
            <li>- Transporte (Origen – Destino)</li>
            <li>- Depósito</li>
            <li>- Trámites Aduaneros</li>
            <li>- Gestiones Portuarias</li>
            <li>- Ingresos de Mudanzas al país</li>
            <li>- Recepción del cajón o contenedor y entrega al domicilio</li>
            <li>- Seguros de Mudanzas</li>
            <li>- Freight Forwarder</li>
            <li>- Cargas Consolidadas</li>
            <li>- Servicio PUERTA A PUERTA a Disposición del cliente</li>
            <li>- Seguimiento diario de la mercadería en curso</li>
          </ul>

          <Link data-aos='fade-up' to='/contacto' className='transition link'>
            _solicitar información
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Mudanzas
