import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import CardPhoto from '../../components/CardPhoto/CardPhoto.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Photo.scss'
import dataJsonPhoto from '../../data/dataPhoto.json'
import insta from '../../img/insta.png'

function Photo() {
  const [allData, setAllData] = useState([])

  useEffect(() => {
    setAllData(dataJsonPhoto)
  }, [])

  return (
    <div>
      <Header />
        <Banner
          title="Photo"
          subTitle="Faites défiler vers le bas pour en voir plus"
          src="http://res.cloudinary.com/dohyiersk/image/upload/c_scale,w_auto/v1/portfolio/20_dquvwi"
          alt="payage montblanc lune"
          classImg={allData.find((item) => item.public_id === "20_dquvwi")?.classImg}
        />
      <main className="main-photo">
        <div className="photo-text">
          <h1 className="photo-title">Photo</h1>
          <p className="photo-description">Je fais des photos depuis l'âge de 13 ans que je publie sur mon compte Instagram</p>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/adriengonon_/">
            <img className='instaImg' src={insta} alt="instagram" />
          </a>
        </div>
          <CardPhoto allData={allData} />
      </main>
      <Footer />
    </div>
  )
}

export default Photo
