import { Image } from 'cloudinary-react';
import './CardPhoto.scss';
import { useState, useEffect } from 'react';

// Configurer Cloudinary (remplacez 'your_cloud_name' par votre nom de cloud Cloudinary)
const cloudName = 'dohyiersk';

function CardPhoto({ allData }) {
  const [currentId, setCurrentId] = useState("25_etksxe");
  const [currentIndex, setCurrentIndex] = useState(0);
   const [jsInitialized, setJsInitialized] = useState(false); // Ajouter un nouvel état pour suivre si le JS a été initialisé

  const handleCardClick = (publicId, index) => {
    setCurrentId(publicId);
    setCurrentIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % allData.length; // Pour revenir au début lorsque vous atteignez la dernière image
    setCurrentId(allData[nextIndex].public_id);
    setCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentIndex - 1 + allData.length) % allData.length; // Pour revenir à la dernière image lorsque vous êtes sur la première image
    setCurrentId(allData[prevIndex].public_id);
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    // Exécuter le code JavaScript si une nouvelle image est sélectionnée (currentId est mis à jour)
      import('../../js/picFullHight.js').then((module) => {
        const { init } = module;
        init();
      });
       setJsInitialized(true); // Marquer l'initialisation du JS comme terminée
 }, [currentId, jsInitialized]);

  return (
    <div className="block-photo">
      {allData.map((data, index) => (
        <div
          className="card-link"
          key={data.id}
          onClick={() => handleCardClick(data.public_id, index)} // Ajoutez le gestionnaire d'événement onClick
        >
          {/* <p className="title">{data.img.title}</p> */}
          <Image
            cloudName={cloudName}
            publicId={`portfolio/${data.public_id}`} // Inclure le dossier "portfolio/"
            width="auto"
            height="1000"
            crop="scale"
            // alt={data.img.title}
            className="card-photo"
          />
        </div>
      ))}
      {currentId !== undefined && (
        <div className='js-pic-full-height'>
           <Image
              cloudName={cloudName}
              publicId={`portfolio/${currentId}`} // Inclure le dossier "portfolio/"
              width="auto"
              crop="scale"
              // alt={data.img.title}
              className="pic-full-height"
            />
            <div className='swiperPrev' onClick={handlePrevImage}></div>
            <div className='swiperNext' onClick={handleNextImage}></div>
            <div className='close'></div>
        </div>
      )}
    </div>
  );
}

export default CardPhoto;
