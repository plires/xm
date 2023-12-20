import { Link } from 'react-router-dom'

import './styles.css'

const Deposito = () => {
  return (
    <section id='deposito' className='container-fluid deposito'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 content_data'>
            <h2 data-aos='fade-up'>depósito nacional</h2>
            <h4 data-aos='fade-up'>Recepción de mercadería en depósito</h4>
            <p data-aos='fade-up'>
              - Recepción de mercadería en nuestro depósito central. <br />
              - Inspección y verificación de la mercadería recibida.
              <br />
              - Registro en el sistema WMS global tech y handheld.
              <br />
            </p>
            <h4 data-aos='fade-up'>Depósito y administración de stock</h4>
            <p data-aos='fade-up'>
              - Almacenamiento y organización de la mercadería en nuestro
              depósito. <br />
              - Administración del stock con el sistema WMS global tech y
              handheld.
              <br />- Control de inventarios para asegurar la disponibilidad de
              stock en todo momento.
            </p>
            <h4 data-aos='fade-up'>Embalado y rotulado de bultos</h4>
            <p data-aos='fade-up'>
              - Embalado y rotulado de bultos para su correcta identificación y
              trazabilidad. <br />
              - Etiquetado con etiquetas térmicas y ID único de pallets. <br />-
              Registro de la información en el sistema WMS global tech y
              handheld.
            </p>
            <h4 data-aos='fade-up'>Impresión de documentos pertinentes</h4>
            <p data-aos='fade-up'>
              - Impresión de documentos necesarios para el transporte de la
              mercadería, como facturas y remitos. <br />- Generación de
              documentos aduaneros en caso de ser necesarios.
            </p>
            <h4 data-aos='fade-up'>
              Consolidación y desconsolidación de contenedores
            </h4>
            <p data-aos='fade-up'>
              - Consolidación y desconsolidación de contenedores para optimizar
              el proceso de control. <br />- Uso de un sistema propio
              desarrollado para este fin.
            </p>
            <h4 data-aos='fade-up'>Transbordos</h4>
            <p data-aos='fade-up'>
              - Transbordo de la mercadería de un vehículo a otro, si es
              necesario. <br />- Registro en el sistema WMS global tech y
              handheld.
            </p>
            <h4 data-aos='fade-up'>Control de daños</h4>
            <p data-aos='fade-up'>
              - Control de daños en la mercadería durante todo el proceso de
              transporte y almacenamiento. <br />- Reporte de cualquier daño a
              los clientes.
            </p>
            <h4 data-aos='fade-up'>Servicio Aduanero permanente</h4>
            <p data-aos='fade-up'>
              - Servicio aduanero permanente para asegurar que la mercadería
              cumpla con todas las regulaciones y leyes necesarias.
            </p>
            <Link data-aos='fade-up' to='/contacto' className='transition link'>
              _solicitar información
            </Link>
          </div>
          <div className='col-md-6 content_img'>
            <img
              data-aos='fade-up'
              className='img-fluid'
              src='/img/servicios/estanteria.jpg'
              alt='estanteria'
            />
            <h4 data-aos='fade-up'>Servicio de pesada de cargas y camiones</h4>
            <p data-aos='fade-up'>
              - Servicio de pesada de cargas y camiones para asegurar que la
              mercadería se transporte de manera segura.
            </p>
            <h4 data-aos='fade-up'>Distribución física a nivel nacional</h4>
            <p data-aos='fade-up'>
              - Distribución física de la mercadería a nivel nacional. <br />-
              Unidades con seguimiento satelital y equipos de comunicación para
              asegurar la seguridad de la mercadería.
            </p>
            <h4 data-aos='fade-up'>Control de Inventarios</h4>
            <p data-aos='fade-up'>
              - Control diario del inventario para asegurar la disponibilidad de
              stock.
            </p>
            <h4 data-aos='fade-up'>Seguimiento diario de la mercadería</h4>
            <p data-aos='fade-up'>
              - Seguimiento diario de la mercadería en curso para asegurar que
              se entregue en tiempo y forma.
            </p>
            <h4 data-aos='fade-up'>
              Seguros de mercadería en tránsito y en depósito
            </h4>
            <p data-aos='fade-up'>
              - Seguros de la mercadería en tránsito y en depósito para asegurar
              la protección de los bienes de los clientes.
            </p>
            <h4 data-aos='fade-up'>Procesamiento de devoluciones</h4>
            <p data-aos='fade-up'>
              - Procesamiento de devoluciones para asegurar que los clientes
              puedan devolver la mercadería si es necesario.
            </p>
            <Link data-aos='fade-up' to='/contacto' className='transition link'>
              _solicitar información
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Deposito
