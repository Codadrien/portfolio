import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardVideo.scss';
import { Image } from 'cloudinary-react';
import axios from 'axios';

// Configurer Cloudinary
const cloudName = 'dohyiersk';

function Card({ allData }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('https://adriengonon.fr/backend/wordpress/wp-json/wp/v2/video/?acf_format=standard')
      .then(response => {
        // Trier les vidéos en ordre décroissant en fonction du champ 'order' ou de l'ID
        const sortedVideos = response.data.sort((a, b) => {
          const orderA = a.acf.order ? parseInt(a.acf.order, 10) : a.id;
          const orderB = b.acf.order ? parseInt(b.acf.order, 10) : b.id;
          return orderB - orderA; // Inversez la logique de tri ici
        });
        setVideos(sortedVideos);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des vidéos", error);
      });
  }, []);

  return (
    <>
      {videos.map((video) => (
        <Link className="card" key={video.id} to={`/VideoLink/${video.id}`}>
          <h2 className="title">{video.acf.img.titre}</h2>
          <Image
            cloudName={cloudName}
            publicId={video.acf.img.public_id.title ? `portfolio/${video.acf.img.public_id.title}` : `portfolio/${video.acf.data_public_id}`}
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
