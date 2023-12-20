import { NavLink, Link } from 'react-router-dom'

import { AiFillTwitterCircle } from 'react-icons/ai'
import { RiInstagramFill } from 'react-icons/ri'
import { MdFacebook } from 'react-icons/md'

import './styles.css'

export default function Footer() {
  return (
    <footer className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 logo'>
            <Link to='/'>
              <img
                className='img-fluid transition'
                src='./../../img/footer/logo-footer.png'
                alt='logo xm footer'
              />
            </Link>
          </div>

          <nav className='col-md-6'>
            <ul>
              <li>
                <NavLink
                  className='transition'
                  activeclassname='active'
                  to='/nosotros'
                >
                  nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='transition'
                  activeclassname='active'
                  to='/servicios'
                >
                  servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='transition'
                  activeclassname='active'
                  to='/soluciones'
                >
                  soluciones
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='transition'
                  activeclassname='active'
                  to='/tecnologia'
                >
                  tecnologia
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  className="transition"
                  activeclassname="active"
                  to="/tracking">
                  tracking
                </NavLink>
              </li> */}
              <li className='margin_out'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://script.google.com/macros/s/AKfycbyf4ZcPDMX0HwLZ8wPBRXu7LRJ8VgyTwM5bTKSb_Z7F/dev'
                >
                  clientes
                </a>
              </li>
              <li className='margin_out'>
                <NavLink
                  className='transition'
                  activeclassname='active'
                  to='/contacto'
                >
                  contacto
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='col-md-3 rrss'>
            <a
              className='transition'
              target='_blank'
              rel='noopener noreferrer'
              href={import.meta.env.VITE_FACEBOOK_CLIENT}
            >
              <MdFacebook />
            </a>
            <a
              className='transition'
              target='_blank'
              rel='noopener noreferrer'
              href={import.meta.env.VITE_INSTAGRAM_CLIENT}
            >
              <RiInstagramFill />
            </a>
            <a
              className='transition'
              target='_blank'
              rel='noopener noreferrer'
              href={import.meta.env.VITE_TWITER_CLIENT}
            >
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
      </div>

      <div className='container libre'>
        <div className='row'>
          <div className='col-md-12'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='transition'
              href='https://librecomunicacion.net/'
            >
              by Libre
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
