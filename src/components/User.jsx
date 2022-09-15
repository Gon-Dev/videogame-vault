import { useState } from "react";
import Beaten from "./Beaten.jsx";
import Library from "./Library.jsx"
import Playing from "./Playing.jsx"
import Wishlist from "./Wishlist.jsx"
import "../stylesheets/User.css"
import { useEffect } from "react";


function User( {myGames} ) {
  
  const [activeSection,setActiveSection] = useState(null);
  const sections = [<Library myGames={myGames}/>, <Beaten myGames={myGames}/>, <Playing myGames={myGames}/>, <Wishlist myGames={myGames}/>];

  const sectionsSelect = sections.map( section => {
    return (
      // <></>
      <button
        className={`user-filter-button`}
        type="button"
        key={section.type.name}
        onClick={ () => setActiveSection(section.type.name)}
      >
        {section.type.name.toLocaleUpperCase()}
      </button>
    )
  })
  const sectionToShow = sections.find( section => section.type.name === activeSection)
  console.dir(activeSection);
  // si la seccion clickeada matchea con el nombre del componente, retornar componente
  return (
    <main className="user-main-wrapper">
      <h1 className="user-title">My games</h1>
      <section className="user-filter-wrapper">
        {sectionsSelect}
      </section>
      {sectionToShow}

    </main>
    )
}

export default User;