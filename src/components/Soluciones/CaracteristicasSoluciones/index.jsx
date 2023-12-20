import './styles.css'

const CaracteristicasSoluciones = ({ iconos }) => {
  return (
    <section className='caracteristicas container-fluid'>
      <div className='container fill'>
        <div className='row'>
          <div className='content_data col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
            {iconos.map((item, index) => (
              <div key={item.id} className='content'>
                <img
                  data-aos='fade-up'
                  className='img-fluid'
                  src={`/img/soluciones/${item.src_img}`}
                  alt={item.alt_img}
                />
                <h2 data-aos='fade-up'>{item.title}</h2>
                <p data-aos='fade-up'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <img
          data-aos='fade-up'
          className='img-fluid flecha_abajo'
          src='/img/soluciones/flecha-abajo.png'
          alt='flecha abajo'
        />
      </div>
    </section>
  )
}
export default CaracteristicasSoluciones
