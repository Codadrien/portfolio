import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import dataJsonVideo from '../../data/dataVideo.json'
import Footer from '../../components/Footer/Footer.jsx'
import Header from '../../components/Header/Header.jsx'
import './VideoLink.scss'
import { Image } from 'cloudinary-react';


// Configurer Cloudinary (remplacez 'your_cloud_name' par votre nom de cloud Cloudinary)
const cloudName = 'dohyiersk';

function VideoLink() {
  const [data, setData] = useState(null)
  let { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const foundData = dataJsonVideo.find((item) => item.id === id)
    if (foundData) {
      setData(foundData)
    } else {
      navigate('/Error404')
    }
  }, [id, navigate])

  if (!data) {
    return null
  }

  return (
    <div>
      <Header />
      <main className="main-video">
        <div className="video-text">
          <h1 className="video-title">{data.img.title}</h1>
          <p className="video-description">{data.img.description}</p>
        </div>
          {data.link? (
          <div className="video-part">
            <a target="_blank" rel="noreferrer" href={data.link.url}>
             <Image
            cloudName={cloudName}
            publicId={`portfolio/${data.img.public_id}`} // Inclure le dossier "portfolio/"
            width="auto"
            height="1000"
            crop="scale"
            alt={data.img.title}
            className="thumbnail"
          />
            </a>
            <a target="_blank" rel="noreferrer" className="button" href={data.link.url} >{data.link.title}</a>
          </div>
        ):(
          <div className="video-part">
           {data.youtubeLink.map((youtubeLink, index) => (
            <div  className='video-container'>
                  <iframe
                    width="1200"
                    height="675"
                    key={index}
                    src={`${youtubeLink}?rel=0`}
                    title={`YouTube Video ${index}`}
                    frameborder="0" allow=" autoplay; picture-in-picture" allowfullscreen
                  ></iframe>
            </div>
                ))}
          </div>
        )}
        </main>
      <Footer />
    </div>
  )
}

export default VideoLink
