import './styles.css'

const Intro = () => {
  return (
    <section className='intro container'>
      <div className='row'>
        <div className='tecnologia_icon col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
          <div className='content'>
            <img
              className='img-fluid'
              src='/img/soluciones/flecha-arriba.png'
              alt='flecha arriba'
            />
            <h2>tecnología</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='data col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
          <p>
            Ofrecemos una tecnología líder en la industria que facilita el
            diseño y desarrollo de los procesos de negocio, lo que conlleva a un
            aumento significativo en la productividad, eficiencia y calidad del
            servicio. Nuestra solución es la mejor opción para simplificar y
            optimizar los procesos de negocio en cualquier organización.
          </p>
        </div>
      </div>
    </section>
  )
}
export default Intro
