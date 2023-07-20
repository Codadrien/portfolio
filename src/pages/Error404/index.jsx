import { Link } from 'react-router-dom'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import '../../styles/Error404.scss'

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <div className="error404">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/P7">Retourner sur la page d’accueil</Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
