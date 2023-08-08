import Header from '../../components/Header/Header.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import './HomePage.scss'

function HomePage() {


  return (
    <div className="Video">
      <Header />
      <main>
        <Banner
          title="Bienvenue sur mon portfolio"
          subTitle="Faites défiler vers le bas pour en voir plus"
          src="https://cdn.myportfolio.com/d46a2f23-8a1d-419d-874e-7fa986feecf9/bca4f858-dd80-46c4-bdef-27e4761d1901_rw_3840.jpg?h=87363b3a83069d13f4e69cc44b34cb57"
          alt="payage montblanc lune"
        />
        <div className="block-description">
        <div className='text-part'>
        <p className='title'>Photographe et Vid&eacute;aste professionnel, je suis disponible pour :</p>
        <p>- La R&eacute;alisation de vid&eacute;os/clips avec cam&eacute;ra professionnelle.<br />- Shooting Photos + retouche.<br />- R&eacute;alisation de live vid&eacute;o avec le logiciel OBS (Youtube, Facebook, Twitch ...)<br />- Montage vid&eacute;o.</p>
        <p>Je propose aussi mes services pour de la prise de vue a&eacute;rienne avec mon drone (photo/vid&eacute;o) :<br />- T&eacute;l&eacute;pilote de drone Professionnel d&eacute;clar&eacute; &agrave; la DGAC.<br />- Assurance responsabilit&eacute; civile professionnelle sp&eacute;cifique.<br />- Vol possible &agrave; la campagne comme en ville (d&eacute;claration &agrave; la pr&eacute;fecture au pr&eacute;alable).</p>
        <p>Mat&eacute;riel :<br />Drone DJI mini 2 (vid&eacute;o 4k).<br />Sony A7 III (vid&eacute;o 4k).<br />Tamron 28-75 mm f/2.8<br />Sony 200-600 mm</p>
        <p>N'h&eacute;sitez pas &agrave; me contacter.<br />Tarif sur demande.</p>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
