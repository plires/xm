import './styles.css'

const Video = () => {
  return (
    <section className='video_mudanza'>
      <div className='video-player'>
        <video
          poster='/img/tecnologia/mudanza-desktop.jpg'
          className='video'
          playsInline='playsInline'
          autoPlay='autoPlay'
          muted='muted'
          loop='loop'
        >
          <source src='/video/mudanza.mp4' type='video/mp4' />
          Tu navegador no admite la reproducción de videos MP4.
        </video>
        <div className='overlay'></div>
      </div>

      <section className='container-fluid'>
        <div className='row'>
          <div className='content_img_mobile col-md-12'>
            <img
              data-aos='fade-up'
              className='img-fluid'
              src='/img/tecnologia/mudanza-para-mobile.jpg'
              alt='mudanza'
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default Video
