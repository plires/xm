import { Link } from 'react-router-dom'

import './styles.css'

const Botones = ({ botones, scrollToAnchor }) => {
  const handleClick = anchorId => {
    scrollToAnchor(anchorId, 180)
  }

  return (
    <section data-aos='fade-up' className='botones'>
      <div className='container'>
        <div className='row'>
          {botones.map((boton, index) => (
            <div key={boton.id} className='col-6 col-md-3'>
              <Link
                onClick={() => handleClick(boton.to_id)}
                className='transition content'
              >
                <img
                  className='img-fluid transition'
                  src={`/img/servicios/${boton.src_img}`}
                  alt={boton.alt_img}
                />
                <h3 className='transition'>{boton.title}</h3>

                <p className='link transition'>_ver más</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Botones
