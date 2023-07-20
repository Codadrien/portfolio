import '../styles/StarRating.scss'

const StarRating = ({ rating }) => {
  const maxRating = 5
  const starArray = []

  // Générer les étoiles pleines
  for (let i = 0; i < rating; i++) {
    starArray.push(<span className="color-star" key={i}></span>)
  }

  // Générer les étoiles vides
  for (let i = rating; i < maxRating; i++) {
    starArray.push(<span className="empty-star" key={i}></span>)
  }

  return <div className="all-star">{starArray}</div>
}

export default StarRating
