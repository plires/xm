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
            <h2>contacto</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='data col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
          <h2>Buenos Aires</h2>
          <p>
            Dirección: {import.meta.env.VITE_ADRESS_SHOW_CLIENT} <br />
            Teléfono: {import.meta.env.VITE_PHONE_SHOW_CLIENT} <br />
            Email: {import.meta.env.VITE_EMAIL_CLIENT}
          </p>
        </div>
      </div>
    </section>
  )
}
export default Intro
