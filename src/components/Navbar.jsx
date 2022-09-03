import { Link } from 'react-router-dom';
import home from '../assets/home.svg'
import search from '../assets/search.svg'
import about from '../assets/information-outline.svg'
import user from '../assets/account.svg'
import '../stylesheets/Navbar.css'
function Navbar() {
  return (
    <nav className="nav-wrapper">
      <Link className="nav-link" to="/">
        <img className="nav-icon" src={home} alt="home" />
        <p className="nav-link-text">HOME</p>
      </Link>
      <Link className="nav-link" to="/search">
        <img className="nav-icon" src={search} alt="" />
        <p className="nav-link-text">SEARCH</p>
      </Link>
      <Link className="nav-link" to="/user">
        <img className="nav-icon" src={user} alt="" />
        <p className="nav-link-text">USER</p>
      </Link>
      <Link className="nav-link" to="/about">
        <img className="nav-icon" src={about} alt="" />
        <p className="nav-link-text">ABOUT</p>
      </Link>
    </nav>
  )
}
export default Navbar;