import './styles.css'

const Header = () => {
  return (
    <header>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 data-aos='fade-up'>
                “La familia es nuestro motor y la tecnología nuestra herramienta
                para la logística perfecta”
              </h1>
            </div>
          </div>
        </div>
      </div>
      <img
        className='img-fluid xm_img'
        src='/img/nosotros/xm-header.png'
        alt='xm header'
      />
    </header>
  )
}
export default Header
