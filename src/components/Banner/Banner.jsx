import './Banner.scss'

function Banner({ title, subTitle, src, alt, classImg}) {
  const isVideo = src.includes("video");
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subTitle">{subTitle}</p>
      </div>
      {isVideo ? (
        <video className="banner-video" autoPlay muted loop>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img className={`${classImg} banner-img`} src={src} alt={alt} />
      )}
    </div>
  )
}

export default Banner
