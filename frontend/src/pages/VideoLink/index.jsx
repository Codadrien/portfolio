import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import './VideoLink.scss';
import { Image } from 'cloudinary-react';

const cloudName = 'dohyiersk';

function VideoLink() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost/backend/wordpress/wp-json/wp/v2/video/${id}?acf_format=standard`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données vidéo", error);
        navigate('/Error404');
      });
  }, [id, navigate]);

  if (!data) {
    return <p>Chargement...</p>;
  }

  // Utiliser le titre ou data_public_id pour le public_id en fonction de la disponibilité
  const publicId = data.acf.img.public_id.title ? `portfolio/${data.acf.img.public_id.title}` : `portfolio/${data.acf.data_public_id}`;

  // Convertissez l'objet youtubelinks en tableau et filtrez les valeurs vides.
  const youtubeLinks = Object.values(data.acf.youtubelinks).filter(link => link);

  return (
    <div>
      <Header />
      <main className="main-video">
        <div className="video-text">
          <h1 className="video-title">{data.acf.img.title}</h1>
          <p className="video-description">{data.acf.img.description}</p>
        </div>
        {data.acf.link && data.acf.link.url && (
          <div className="video-part">
            <a target="_blank" rel="noreferrer" href={data.acf.link.url}>
              <Image
                cloudName={cloudName}
                publicId={publicId}
                width="auto"
                height="1000"
                crop="scale"
                alt={data.acf.img.title}
                className="thumbnail"
              />
            </a>
            <a target="_blank" rel="noreferrer" className="button" href={data.acf.link.url}>{data.acf.link.title}</a>
          </div>
        )}
        {youtubeLinks.length > 0 && (
          <div className="video-part display-unset">
            {youtubeLinks.map((youtubeLink, index) => (
              <div className='video-container' key={index}>
                <iframe
                  width="1200"
                  height="675"
                  src={`${youtubeLink}?rel=0`}
                  title={`YouTube Video ${index + 1}`}
                  frameBorder="0"
                  allow="autoplay; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default VideoLink;
