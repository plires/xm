import './styles.css'

const Imagen = () => {
  return (
    <section className='imagen'>
      <div className='content_img'>
        <div className='container-fluid p-0'>
          <img
            data-aos='fade-up'
            className='img-fluid img_frase_xm'
            src='/img/soluciones/frase.png'
            alt='frase xm'
          />
          <div className='container'>
            <div data-aos='fade-up' className='row'>
              <div className='col-md-12'></div>
            </div>
          </div>

          <div data-aos='fade-up' className='container container_data'>
            <div className='row content_data'>
              <div className='col-md-10 offset-md-1'>
                <h3>Soluciones FULLCOMMERCE</h3>
                <p>
                  En XM Logística nos distinguimos por nuestra capacidad de
                  aplicar tecnología de vanguardia para optimizar las
                  operaciones de nuestros clientes. De esta manera, logramos una
                  mayor eficiencia y reducción de costos operativos, mientras
                  maximizamos sus oportunidades de negocio.
                </p>
                <p className='description_extra'>
                  Nos enorgullece ser un socio estratégico confiable y
                  comprometido con el éxito de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='faja_fill'>&nbsp;</div>
    </section>
  )
}
export default Imagen
