import { Link } from 'react-router-dom'
import '../styles/Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <img
          className="footer-logo"
          src={require('../img/logo.png')}
          alt="Logo Kasa"
        />
      </Link>
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
