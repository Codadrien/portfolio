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
          src="https://res.cloudinary.com/dohyiersk/video/upload/f_auto:video,q_99/v1/portfolio/fbwobxbntqjfjjeqlvq3"
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
