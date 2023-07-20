import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import dataJson from '../../data/data.json'
import Accordion from '../../components/Accordion.jsx'
import Footer from '../../components/Footer.jsx'
import Header from '../../components/Header.jsx'
import Slider from '../../components/Slider.jsx'
import StarRating from '../../components/StarRating.jsx'
import Tag from '../../components/Tag.jsx'
import '../../styles/Logement.scss'

function HomePage() {
  const [data, setData] = useState(null)
  let { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const foundData = dataJson.find((item) => item.id === id)
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
      <main>
        <Slider data={data} />
        <div className="top-part">
          <div className="title-part">
            <h1 className="title">{data.title}</h1>
            <span className="location">{data.location}</span>
            <Tag data={data} />
          </div>
          <div className="profile">
            <div className="profile-part">
              <span className="profile-name">{data.host.name}</span>
              <img className="profile-pic" src={data.host.picture} alt="host" />
            </div>
            <StarRating rating={data.rating} />
          </div>
        </div>
        <div className="accordion-50">
          <Accordion title="Description" content={data.description} />
          <Accordion title="Equipement" content={data.equipments} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
