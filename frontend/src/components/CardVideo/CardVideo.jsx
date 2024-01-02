import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardVideo.scss';
import { Image } from 'cloudinary-react';
import axios from 'axios';

// Configurer Cloudinary (remplacez 'your_cloud_name' par votre nom de cloud Cloudinary)
const cloudName = 'dohyiersk';

function Card({ allData }) {
  // Utiliser useState pour définir les données initiales à un tableau vide
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Récupérer les données lors du montage du composant
    axios.get('http://localhost/backend/wordpress/wp-json/wp/v2/video/?acf_format=standard')
      .then(response => {
        // Mettre à jour l'état avec les données récupérées
        setVideos(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des vidéos", error);
      });
  }, []); // Le tableau vide assure que l'effet s'exécute une seule fois après le premier rendu

  // Inverser l'ordre des vidéos
  const reversedVideos = [...videos].reverse();

  return (
    <>
      {reversedVideos.map((video) => (
        <Link className="card" key={video.id} to={`/VideoLink/${video.id}`}>
          <h2 className="title">{video.acf.img.titre}</h2>
          <Image
            cloudName={cloudName}
            publicId={video.acf.img.public_id.title ? `portfolio/${video.acf.img.public_id.title}` : `portfolio/${video.acf.data_public_id}`} // Utiliser le titre ou data_public_id pour le public_id en fonction de la disponibilité
            width="auto"
            height="1000"
            crop="scale"
            className="card-img"
          />
        </Link>
      ))}
    </>
  );
}

export default Card;
