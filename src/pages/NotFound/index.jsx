import './styles.css'

export default function NotFound() {
  return (
    <div className='container-fluid not_found'>
      <div className='row'>
        <div className='col-md-12 content'>
          <img
            src={`${import.meta.env.VITE_ROOT}img/header/logo-xm.png`}
            alt='logo hm'
          />
          <p>
            No hemos encontrado la página <br />
            que estas buscando.
          </p>
        </div>
      </div>
    </div>
  )
}
