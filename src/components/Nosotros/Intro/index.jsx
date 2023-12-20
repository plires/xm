import './styles.css'

const Intro = () => {
  return (
    <section className='intro'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 content_img'>
            <img
              data-aos='fade-up'
              className='img-fluid'
              src='/img/nosotros/camioneta-xm.jpg'
              alt='camioneta logistica xm'
            />
          </div>

          <div className='col-lg-6 content_data'>
            <h2 data-aos='fade-up'>nosotros</h2>
            <p data-aos='fade-up' className='bold'>
              Fundada en Argentina en 2013, nuestra empresa se ha dedicado a
              proporcionar servicios de logística nacional de calidad a lo largo
              de los años. Nos enorgullecemos de ser una empresa familiar que
              valora la tecnología avanzada, el trato personalizado con el
              cliente y el ambiente familiar en todas nuestras operaciones.
            </p>
            <p data-aos='fade-up'>
              Nuestra visión es convertirnos en el líder del mercado en la
              industria logística, tanto en el ámbito nacional como
              internacional. Nos esforzamos por ofrecer un servicio de alta
              calidad que supere las expectativas de nuestros clientes y se
              adapte a sus necesidades en todo momento. Para lograr esto, nos
              enfocamos en las siguientes metas:
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Intro
