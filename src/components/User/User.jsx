import { useEffect, useState } from "react"; 
import Library from "./Library.jsx";
import Beaten from "./Beaten.jsx";
import Playing from "./Playing.jsx";
import Wishlist from "./Wishlist.jsx";
import { handleFilterButton } from "../../services/handlers.js";
import "../../stylesheets/User.css";
import UserFilterButton from "./UserFilterButton.jsx";

function User( {myGames, setMyGames} ) {
  
  const [activeSection,setActiveSection] = useState(null);
  
  const deleteGame = (game) => {
    
    const section = activeSection.toLowerCase();
    if(section === "beaten") {
      const clickedGameName = game.name;
      const UpdatedBeatenGames = [...myGames.beaten].filter( game => game.name !== clickedGameName);
      const UpdatedMyGames = {
        ...myGames,
        beaten: UpdatedBeatenGames
      }
      setMyGames(UpdatedMyGames);
    } else if(section === "playing") {
      const clickedGameName = game.name;
      const UpdatedPlayingGames = [...myGames.playing].filter( game => game.name !== clickedGameName);
      const UpdatedMyGames = {
        ...myGames,
        playing: UpdatedPlayingGames
      }
      setMyGames(UpdatedMyGames);
    } else if(section === "wishlist") {
      const clickedGameName = game.name;
      const UpdatedWishlistGames = [...myGames.wishlist].filter( game => game.name !== clickedGameName);
      const UpdatedMyGames = {
        ...myGames,
        wishlist: UpdatedWishlistGames
      }
      setMyGames(UpdatedMyGames);
    } else if(section === "library") {
      const clickedGameName = game.name;
      const UpdatedLibraryGames = [...myGames.library].filter( game => game.name !== clickedGameName);
      const UpdatedMyGames = {
        ...myGames,
        library: UpdatedLibraryGames
      }
      setMyGames(UpdatedMyGames);
    }
    
  }

  const sections = [
    <Library myGames={myGames} deleteGame={deleteGame}/>,
    <Beaten myGames={myGames} deleteGame={deleteGame}/>,
    <Playing myGames={myGames} deleteGame={deleteGame}/>,
    <Wishlist myGames={myGames} deleteGame={deleteGame}/>
  ];

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