import { Link } from 'react-router-dom'

import './styles.css'

const Logistica = () => {
  return (
    <section id='logistica' className='container logistica'>
      <div className='row'>
        <div className='col-md-6 content_data'>
          <div data-aos='fade-up' className='content_title'>
            <h2>logística</h2>
            <span></span>
          </div>
          <p data-aos='fade-up' className='intro bold'>
            En Xm ofrecemos una amplia gama de servicios de logística para
            nuestros clientes:
          </p>
          <h3 data-aos='fade-up'>nacional</h3>
          <ul data-aos='fade-up'>
            <li>
              - Servicios a empresas e industrias, comercios, oficinas y
              particulares.
            </li>
            <li>
              - Proporcionamos servicios de puerta a puerta, lo que significa
              que recogemos y entregamos la mercancía en la puerta de origen y
              destino.
            </li>
            <li>
              - Utilizamos un sistema de logística avanzado llamado WMS Global
              Tech que permite el control y seguimiento de la mercancía en
              tiempo real. Esto incluye trazabilidad de mercancía, un sistema
              handheld para pickeo, ingresos y egresos de mercancía, un almacén
              en línea, una solicitud de pedidos por programa en línea y un
              control de stock en línea.
            </li>
            <li>
              - Contamos con una flota de vehículos propios para realizar
              entregas en todo el país.
            </li>
            <li>
              - Ofrecemos servicios de embalaje con etiquetado Zebra y con
              impresoras térmicas de alta calidad.
            </li>
            <li>
              - Mantenemos la seguridad de la mercancía gracias a un sistema de
              cámaras y sensores de movimiento y perimetrales.
            </li>
            <li>
              - Opcionalmente, ofrecemos servicios de custodia para mantener la
              mercancía en nuestro almacén seguro.
            </li>
            <li>
              - Todos nuestros vehículos son de última generación para
              garantizar un servicio de alta calidad y eficiencia.
            </li>
            <li>
              - Proporcionamos un seguro para la mercancía en caso de pérdida o
              daño durante el transporte.
            </li>
            <li>
              - Ofrecemos presupuestos sin cargo para que los clientes conozcan
              de antemano el costo de nuestros servicios.
            </li>
            <li>
              - Nuestro personal altamente capacitado y especializado está
              siempre dispuesto a brindar un servicio de calidad y hacer que su
              experiencia de logística sea lo más fácil y cómoda posible.{' '}
            </li>
          </ul>

          <Link data-aos='fade-up' to='/contacto' className='transition link'>
            _solicitar información
          </Link>
        </div>
        <div className='col-md-6 content_img'>
          <img
            data-aos='fade-up'
            className='img-fluid'
            src='/img/servicios/camion.jpg'
            alt='camion'
          />
          <h3 data-aos='fade-up'>internacional</h3>
          <ul data-aos='fade-up'>
            <li>- Flete Aéreo – Marítimo – Terrestre – Ferroviario</li>
            <li>- Consolidación de cargas aéreas, marítimas y terrestres</li>
            <li>- Contenedores Completos (FCL)</li>
            <li>- Cargas Consolidadas (LCL)</li>
            <li>- Cargas Generales</li>
            <li>- Cargas a granel</li>
            <li>
              - Transportes especiales: Perecederos; IMO; Animales Vivos;
              Refrigeradas
            </li>
            <li>- Logística Integrada Puerta a Puerta (house to house)</li>
            <li>- Embalajes</li>
            <li>- Exportación de Muestras</li>
            <li>- Depósito nacional</li>
            <li>- Logística en el exterior</li>
            <li>- Despachos de Aduana</li>
            <li>- Documentación</li>
            <li>- Seguimiento diario de la carga en curso</li>
            <li>- Seguros Internacionales</li>
            <li>- Custodia</li>
            <li>- Cotizaciones sin cargo</li>
            <li>- Asesoramiento en general</li>
          </ul>
          <Link data-aos='fade-up' to='/contacto' className='transition link'>
            _solicitar información
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Logistica
