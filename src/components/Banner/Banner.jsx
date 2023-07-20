import './Banner.scss'

function Banner({ title, subTitle, src, alt }) {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1 className="banner-title">{title}</h1>
        <p className="banner-subTitle">{subTitle}</p>
      </div>
      <img className="banner-img" src={src} alt={alt} />
    </div>
  )
}

export default Banner
