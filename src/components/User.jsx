import { useEffect, useState } from "react";
import Library from "./Library.jsx";
import Beaten from "./Beaten.jsx";
import Playing from "./Playing.jsx";
import Wishlist from "./Wishlist.jsx";
import { handleFilterButton } from "../services/handlers.js";
import "../stylesheets/User.css";

function User( {myGames} ) {
  
  const [activeSection,setActiveSection] = useState(null);

  const sections = [<Library myGames={myGames}/>, <Beaten myGames={myGames}/>, <Playing myGames={myGames}/>, <Wishlist myGames={myGames}/>];

  let sectionToShow = sections.find( section => section.type.name === activeSection)
  activeSection ? null : sectionToShow = sections[0];
  useEffect( () => {
    const buttons = document.querySelectorAll(".user-filter-button");
    buttons.forEach( button => button.classList.contains("button-active")) ? null : buttons[0].classList.add("button-active");
  },[]);
  
  return (
    <main className="user-main-wrapper">
      <h1 className="user-title">My vault</h1>
      <section className="user-filter-wrapper">
      <button
        className={`user-filter-button`}
        type="button"
        key="library"
        onClick={ event => {
          setActiveSection("Library")
          handleFilterButton(event)
        }}>
        LIBRARY        
      </button>
      <button
        className={`user-filter-button`}
        type="button"
        key="beaten"
        onClick={ event => {
          setActiveSection("Beaten")
          handleFilterButton(event)
        }}>
        BEATEN      
      </button>
      <button
        className={`user-filter-button`}
        type="button"
        key="wishlist"
        onClick={ event => {
          setActiveSection("Wishlist")
          handleFilterButton(event)
        }}>
        WISHLIST        
      </button>
      <button
        className={`user-filter-button`}
        type="button"
        key="playing"
        onClick={ event => {
          setActiveSection("Playing")
          handleFilterButton(event)
        }}>
        PLAYING        
      </button>
      </section>
      {sectionToShow}
    </main>
  );
}



export default User;