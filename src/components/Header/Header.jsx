import { Link } from 'react-router-dom'
import './Header.scss'
// import logoInsta from '../img/insta.svg'

function Header() {
  return (
    <div className="Header">
      <nav>
            <ul className='menu'>
          <li>
            <Link to="/portfolio">Accueil</Link>
          </li>
           <li>
            <Link to="/Video">Video</Link>
          </li>
          <li>
            <Link to="/Photo">Photo</Link>
          </li>
        </ul>
        <Link className='logo' to="/">
        <span className='logo-span'>Adrien Gonon</span>
        </Link>
        <div className='social'>
        <a className="insta" href="https://www.instagram.com/adriengonon_/" target="_blank" rel="noopener noreferrer">
        </a>
        </div>
      </nav>
    </div>
  )
}

export default Header
