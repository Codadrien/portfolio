import Header from '../../components/Header.jsx'
import Banner from '../../components/Banner.jsx'
import Card from '../../components/Card.jsx'
import Footer from '../../components/Footer.jsx'
import logo from '../../img/falaiseMer.png'
import '../../styles/HomePages.scss'
import React, { useState, useEffect } from 'react'
import dataJson from '../../data/data.json'

function HomePage() {
  const [allData, setAllData] = useState([])

  useEffect(() => {
    setAllData(dataJson)
  }, [])

  return (
    <div className="HomePage">
      <Header />
      <main>
        <Banner
          texte="Chez vous, partout et ailleurs"
          src={logo}
          alt="falaise mer"
        />
        <div className="block-cards">
          <Card allData={allData} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
