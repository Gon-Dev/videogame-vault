import React from "react";
import { Link } from 'react-router-dom';
import crosshairsIcon from "../../assets/crosshairs.svg";
import saveIcon from "../../assets/content-save-outline.svg";
import SummaryItem from "./SummaryItem.jsx";
import TrackIcon from "../../assets/monitor-cellphone.svg";
import '../../stylesheets/Home.css';

function Home() {

  const summaryDescriptions = {
    search: "Search for a game you're playing, just beaten, want in your wishlist or just bought in some platform.",
    save: "Save the game to your personal Vault and keep track of your most beloved experiences in gaming.",
    track: "Have the final form of a videogame library, everything in one place. We work to take care of you, lazy colegues!",
  }
  
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
          <SummaryItem icon={crosshairsIcon} title="Search" description={summaryDescriptions.search}/>
          <SummaryItem icon={saveIcon} title="Save" description={summaryDescriptions.save}/>
          <SummaryItem icon={TrackIcon} title="Keep Track" description={summaryDescriptions.track}/>
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