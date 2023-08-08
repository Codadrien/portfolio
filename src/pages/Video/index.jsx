import Header from '../../components/Header/Header.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import CardVideo from '../../components/CardVideo/CardVideo.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './Video.scss'
import React, { useState, useEffect } from 'react'
import dataJson from '../../data/dataVideo.json'

function HomePage() {
  const [allData, setAllData] = useState([])

  useEffect(() => {
    setAllData(dataJson)
  }, [])

  return (
    <div className="Video">
      <Header />
      <main>
        <Banner
          title="Vidéo"
          subTitle="Faites défiler vers le bas pour en voir plus"
          src="https://cdn.myportfolio.com/d46a2f23-8a1d-419d-874e-7fa986feecf9/bca4f858-dd80-46c4-bdef-27e4761d1901_rw_3840.jpg?h=87363b3a83069d13f4e69cc44b34cb57"
          alt="payage montblanc lune"
        />
        <div className="block-cards">
          <CardVideo allData={allData} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
