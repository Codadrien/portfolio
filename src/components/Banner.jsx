import '../styles/Banner.scss'

function Banner({ texte, src, alt }) {
  return (
    <div className="banner">
      <h1 className="banner-text">{texte}</h1>
      <img className="banner-img" src={src} alt={alt} />
    </div>
  )
}

export default Banner
