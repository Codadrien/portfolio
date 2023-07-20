import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import dataJsonVideo from '../../data/dataVideo.json'
import Footer from '../../components/Footer.jsx'
import Header from '../../components/Header/Header.jsx'
import './Video.scss'

function HomePage() {
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
            <img className="video-img" src={data.img.src} alt={data.img.title} />
            </a>
            <a target="_blank" rel="noreferrer" className="button" href={data.link.url} >{data.link.title}</a>
          </div>
        ):(
          <div className="video-part">
           {data.youtubeLink.map((youtubeLink, index) => (
                  <iframe
                    key={index}
                    width="1200"
                    height="675"
                    src={youtubeLink}
                    title={`YouTube Video ${index}`}
                    frameborder="0" allow=" autoplay; picture-in-picture" allowfullscreen
                  ></iframe>
                ))}
          </div>
        )}
        </main>
      <Footer />
    </div>
  )
}

export default HomePage
