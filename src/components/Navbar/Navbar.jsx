import { useState } from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home.svg";
import search from "../../assets/search.svg";
import user from "../../assets/account.svg";
import expandArrow from "../../assets/chevron-right.svg";
import "../../stylesheets/Navbar.css";

function Navbar() {

  const [isExpanded,setIsExpanded] = useState(false);


  return (
    <nav className={`nav-wrapper ${isExpanded ? "" : "navbar-collapsed"}`}>
      <Link className="nav-link" to="/">
        <img className="nav-icon" src={home} alt="home" />
        <p className="nav-link-text">HOME</p>
      </Link>
      <Link className="nav-link" to="/user">
        <img className="nav-icon" src={user} alt="" />
        <p className="nav-link-text">USER</p>
      </Link>
      <Link className="nav-link" to="/search">
        <img className="nav-icon" src={search} alt="" />
        <p className="nav-link-text">SEARCH</p>
      </Link>
      <button 
        className="arrow-expand" 
        onClick={ () => { setIsExpanded(prevState => !prevState) }}
      >
        <img className={`arrow-expand-icon ${isExpanded ? "arrow-collapsed" : ""}`} src={expandArrow} alt="" />
      </button>
    </nav>
  )
}
export default Navbar;