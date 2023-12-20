import Botones from './../../Servicios/Botones'
import { getBotones } from './../../../utils/dataUtils'
import './styles.css'

const Header = ({ scrollToAnchor }) => {
  const botones = getBotones('botones')

  return (
    <header className='container-fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 data-aos='fade-up'>servicios</h1>
          </div>
        </div>
      </div>
      <Botones botones={botones} scrollToAnchor={scrollToAnchor} />
    </header>
  )
}
export default Header
