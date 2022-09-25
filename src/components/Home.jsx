import React from "react";
import { Link } from 'react-router-dom';
import crosshairsIcon from "../assets/crosshairs.svg";
import saveIcon from "../assets/content-save-outline.svg";
import '../stylesheets/Home.css';
function Home() {
  return (
    <main className="home-main-wrapper">
      <div className="home-vg-logo-wrapper">
        <p className="logo-vg">vg</p>
        <p className="logo-vault">Vault</p>
        <p className="logo-powered">poweredBy</p>
        <p className="logo-rawg">RAWG</p>
      </div>
      <p className="home-logo-subtitle">Your place for videogame storing and tracking.</p>
      <div className="home-info-wrapper">
        <section className="summary-wrapper">
          <div className="summary-item">
            <img className="summary-icon" src={crosshairsIcon} alt="crosshairs" />
            <h4 className="summary-title">Search</h4>
            <p className="summary-description">Search for a game you're playing, just beaten, want in your wishlist or just bought in some platform.</p>
          </div>
          <div className="summary-item">
            <img className="summary-icon" src={saveIcon} alt="save" />
            <h4 className="summary-title">Save</h4>
            <p className="summary-description">Save the game to your personal Vault and keep track of your most beloved experiences in gaming.</p>
          </div>
        </section>
        <section className="hero-wrapper">
          <h3 className="hero-title">You're one step ahead for storing stories</h3>
          <Link to="/search">
            <button className="hero-button">
              GET STARTED
            </button>
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Home;