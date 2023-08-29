import { Link } from 'react-router-dom'
import './CardVideo.scss'
import { Image } from 'cloudinary-react';

// Configurer Cloudinary (remplacez 'your_cloud_name' par votre nom de cloud Cloudinary)
const cloudName = 'dohyiersk';

function Card({ allData }) {
  return (
    <>
      {allData.map((data) => (
        <Link className="card" key={data.id} to={`/VideoLink/${data.id}`}>
          <h2 className="title">{data.img.title}</h2>
           <Image
            cloudName={cloudName}
            publicId={`portfolio/${data.img.public_id}`} // Inclure le dossier "portfolio/"
            width="auto"
            height="1000"
            crop="scale"
            // alt={data.img.title}
            className="card-img"
          />
        </Link>
      ))}
    </>
  )
}

export default Card
