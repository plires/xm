import { Link } from 'react-router-dom'
import './styles.css'

const Servicios = props => {
  const { servicios } = props

  return (
    <section data-aos='fade-up' className='servicios'>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row content_title'>
            <h2>Servicios</h2>
          </div>
        </div>
        <div className='row'>
          {servicios.map((servicio, index) => (
            <article
              key={servicio.id}
              className='col-12 col-sm-6 col-lg-3 content'
            >
              <Link to={servicio.link_data}>
                <div className='overlay transition'></div>
                <img
                  className='transition img_background img-fluid'
                  src={`/img/home/${servicio.src_img_background}`}
                  alt={servicio.alt_img_background}
                />
                <div className='data'>
                  <img
                    className='transition'
                    src='/img/home/flecha.png'
                    alt={servicio.alt_img_data}
                  />
                  <h2 className='transition'>{servicio.title_data}</h2>
                  <p className='transition parrafo'>{servicio.text_data}</p>
                  <p className='transition link'>_ver más</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Servicios
