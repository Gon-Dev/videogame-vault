import { useEffect, useState } from "react"; 
import Library from "./Library.jsx";
import Beaten from "./Beaten.jsx";
import Playing from "./Playing.jsx";
import Wishlist from "./Wishlist.jsx";
import { handleFilterButton } from "../../services/handlers.js";
import "../../stylesheets/User.css";
import UserFilterButton from "./UserFilterButton.jsx";

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
        <UserFilterButton 
          title="Library" 
          setActiveSection={setActiveSection} 
          handleFilterButton={handleFilterButton} />
        <UserFilterButton 
          title="Beaten" 
          setActiveSection={setActiveSection} 
          handleFilterButton={handleFilterButton} />
        <UserFilterButton 
          title="Wishlist" 
          setActiveSection={setActiveSection} 
          handleFilterButton={handleFilterButton} />
        <UserFilterButton 
          title="Playing" 
          setActiveSection={setActiveSection} 
          handleFilterButton={handleFilterButton} />
      </section>
      {sectionToShow}
    </main>
  );
}



export default User;