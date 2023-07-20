import './Banner.scss'

function Banner({ texte, src, alt }) {
  return (
    <div className="banner">
      <img className="banner-img" src={src} alt={alt} />
    </div>
  )
}

export default Banner
