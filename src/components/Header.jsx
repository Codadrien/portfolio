import { Link } from 'react-router-dom'
import '../styles/Header.scss'
import logoInsta from '../img/insta.svg'

function Header() {
  return (
    <div className="Header">
      <nav>
            <ul>
          <li>
            <Link to="/P7">Accueil</Link>
          </li>
          <li>
            <Link to="/APropos">A Propos</Link>
          </li>
        </ul>
        <Link to="/P7">
        <span className='logo'>Adrien Gonon</span>
        </Link>
        <a className="insta" href="https://www.instagram.com/adripiks/" target="_blank" rel="noopener noreferrer">
          {/* <img src={logoInsta} alt="instagram"/> */}
        </a>
      </nav>
    </div>
  )
}

export default Header
