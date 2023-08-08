import React, { useState, useEffect } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import CardPhoto from '../../components/CardPhoto/CardPhoto.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Photo.scss'
import dataJsonPhoto from '../../data/dataPhoto.json'

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
          src="https://cdn.myportfolio.com/d46a2f23-8a1d-419d-874e-7fa986feecf9/bca4f858-dd80-46c4-bdef-27e4761d1901_rw_3840.jpg?h=87363b3a83069d13f4e69cc44b34cb57"
          alt="payage montblanc lune"
        />
      <main className="main-photo">
        <div className="photo-text">
          <h1 className="photo-title">Photo</h1>
          <p className="photo-description">Je fais des photos depuis l'âge de 13 ans que je publie sur mon compte Instagram</p>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/adripiks/">
            <img src="https://cdn.myportfolio.com/d46a2f23-8a1d-419d-874e-7fa986feecf9/22f09f7d-10ef-4902-a226-9e025861c2e2_rw_600.png?h=2a4d307c8686d34c9459cbd3c239be10" alt="instagram" />
          </a>
        </div>
          <CardPhoto allData={allData} />
      </main>
      <Footer />
    </div>
  )
}

export default Photo
