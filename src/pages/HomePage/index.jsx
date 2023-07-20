import Header from '../../components/Header/Header.jsx'
import Banner from '../../components/Banner/Banner.jsx'
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
          src="https://cdn.myportfolio.com/d46a2f23-8a1d-419d-874e-7fa986feecf9/bca4f858-dd80-46c4-bdef-27e4761d1901_rw_3840.jpg?h=87363b3a83069d13f4e69cc44b34cb57"
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
