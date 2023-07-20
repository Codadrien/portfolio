import { Link } from 'react-router-dom'
import './Header.scss'
// import logoInsta from '../img/insta.svg'

function Header() {
  return (
    <div className="Header">
      <nav>
            <ul className='menu'>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/APropos">A Propos</Link>
          </li>
        </ul>
        <Link className='logo' to="/">
        <span className='logo-span'>Adrien Gonon</span>
        </Link>
        <div className='social'>
        <a className="insta" href="https://www.instagram.com/adripiks/" target="_blank" rel="noopener noreferrer">
        </a>
        </div>
      </nav>
    </div>
  )
}

export default Header
