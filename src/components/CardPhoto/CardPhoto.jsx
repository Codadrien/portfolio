import { Link } from 'react-router-dom'
import './CardPhoto.scss'

function CardPhoto({allData}) {



  return (
   <div className="block-photo">
      {allData.map((data) => (
        <Link className="card-link" key={data.id} to={`/photo/${data.id}`}>
          <p className="title">{data.img.title}</p>
          <img className="card-photo" src={data.img.src} alt={data.img.title} />
        </Link>
      ))}
    </div>
  )
}

export default CardPhoto
