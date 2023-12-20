import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

import './styles.css'

const FajaExperiencia = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    // Configuración de Typed.js
    const options = {
      strings: ['experiencia', 'responsabilidad', 'seguridad'], // Textos que se mostrarán
      typeSpeed: 60, // Velocidad de escritura en milisegundos
      backSpeed: 40, // Velocidad de borrado en milisegundos
      loop: true, // Repetir el ciclo de escritura/borrado
      backDelay: 500,
      // fadeOut: true, // Desvanecer la frase
    }

    // Crear instancia de Typed.js
    const typed = new Typed(typedRef.current, options)

    // Destruir instancia de Typed.js al desmontar el componente
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className='faja_experiencia'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 content_gradient'>
            <div className='gradient'></div>
          </div>
        </div>
      </div>
      <div className='container-fluid faja'>
        <div className='container'>
          <div className='row'>
            <div className='transition col-md-8 offset-md-2 col-lg-6 offset-lg-3 content_frase'>
              <h3 ref={typedRef}></h3>
            </div>
          </div>
        </div>
        <img
          data-aos='fade-left'
          className='img-fluid hashtag_xm'
          src='/img/home/somos-xm-logistica.png'
          alt='somos xm logistica'
        />
      </div>
    </section>
  )
}

export default FajaExperiencia
