import './styles.css'

const BackgroundImg = () => {
  const mediaQuery = window.matchMedia('(max-width: 992px)')

  return (
    <section className='background_img'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            {mediaQuery.matches ? (
              <img
                data-aos='fade-up'
                className='img-fluid frase_xm'
                src={`/img/nosotros/frase-mobile.png`}
                alt='frase xm'
              />
            ) : (
              <img
                data-aos='fade-up'
                className='img-fluid frase_xm'
                src={`/img/nosotros/frase-desktop.png`}
                alt='frase xm'
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default BackgroundImg
