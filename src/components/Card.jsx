import { Link } from 'react-router-dom'
import '../styles/Card.scss'

function Card({ allData }) {
  return (
    <>
      {allData.map((data) => (
        <Link className="card" key={data.id} to={`/Logement/${data.id}`}>
          <h2 className="title">{data.title}</h2>
          <img className="card-img" src={data.cover} alt={data.title} />
        </Link>
      ))}
    </>
  )
}

export default Card
