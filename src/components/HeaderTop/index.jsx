// import { Link } from "react-router-dom";
import { MdFacebook } from 'react-icons/md'
import { RiInstagramFill } from 'react-icons/ri'
import { AiOutlinePhone, AiFillTwitterCircle } from 'react-icons/ai'

import './styles.css'

export default function HeaderTop() {
  return (
    <section className='header_superior container-fluid p-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 content'>
            <div className='rrss'>
              <a
                className='transition'
                href={import.meta.env.VITE_FACEBOOK_CLIENT}
                target='_blank'
                rel='noopener noreferrer'
              >
                <MdFacebook />
              </a>
              <a
                className='transition'
                href={import.meta.env.VITE_TWITER_CLIENT}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillTwitterCircle />
              </a>
              <a
                className='transition'
                href={import.meta.env.VITE_INSTAGRAM_CLIENT}
                target='_blank'
                rel='noopener noreferrer'
              >
                <RiInstagramFill />
              </a>
            </div>
            <div className='phone'>
              <a
                className='transition'
                href={import.meta.env.VITE_PHONE_CLIENT}
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiOutlinePhone />
                {import.meta.env.VITE_PHONE_SHOW_CLIENT}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
