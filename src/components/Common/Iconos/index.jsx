import './styles.css'

const Iconos = () => {
  return (
    <section className='iconos container'>
      <div className='row'>
        <div data-aos='fade-up' className='col-4 content_icon'>
          <img
            className='img-fluid'
            src='/img/home/economico.gif'
            alt='icono economico'
          />
          <h4>
            Tarifas más <br />
            convenientes
          </h4>
        </div>
        <div data-aos='fade-up' className='col-4 content_icon'>
          <img
            className='img-fluid'
            src='/img/home/asesores.gif'
            alt='icono asesores'
          />
          <h4>
            Asesoramiento integral, <br />
            reportes diarios
          </h4>
        </div>
        <div data-aos='fade-up' className='col-4 content_icon'>
          <img
            className='img-fluid'
            src='/img/home/qr.gif'
            alt='icono economico'
          />
          <h4>
            Equipos de <br />
            última generación
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Iconos
