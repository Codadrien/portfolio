import { Link } from 'react-router-dom'
import './CardVideo.scss'

function Card({ allData }) {
  return (
    <>
      {allData.map((data) => (
        <Link className="card" key={data.id} to={`/VideoLink/${data.id}`}>
          <h2 className="title">{data.img.title}</h2>
          <img className="card-img" src={data.img.src} alt={data.img.title} />
        </Link>
      ))}
    </>
  )
}

export default Card
