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
          src="http://res.cloudinary.com/dohyiersk/image/upload/c_scale,w_auto/v1/portfolio/13_ouuhr7"
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
