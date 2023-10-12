import './Header.scss'
import logo from '../../assets/argentBankLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <nav className="main-nav">
      <Link to ="/" className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/SignIn" className="main-nav-item">
          <FontAwesomeIcon  icon={faUserCircle}/>
            Sign In
        </Link>
      </div>
    </nav>
    )
}

export default Header