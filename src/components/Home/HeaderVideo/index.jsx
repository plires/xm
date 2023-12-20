import './styles.css'

const HeaderVideo = () => {
  return (
    <header>
      <div className='video-player'>
        <div className='overlay'></div>
        <video
          poster='./../../../img/header/header-desktop.jpg'
          className='video'
          playsInline='playsInline'
          autoPlay='autoPlay'
          muted='muted'
          loop='loop'
        >
          <source src='/video/home-xm.mp4' type='video/mp4' />
          Tu navegador no admite la reproducción de videos MP4.
        </video>
        <div className='frase'>
          <h1 data-aos='fade-up'>#somosXMlogistica</h1>
        </div>
      </div>
      <div className='faja'>
        <div className='color_fill'></div>
      </div>
    </header>
  )
}

export default HeaderVideo
