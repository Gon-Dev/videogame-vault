import React, {useState} from "react";
import fetchGameList from '../services/fetchGameList.js'
import GameList from './GameList.jsx'
import '../stylesheets/SearchGameList.css'
function SearchGameList() {
  const [gameNameInput,setGameNameInput] = useState("");
  const [listGameData, setListGameData] = useState(null);
  const gamesResultsArray = listGameData ? listGameData.results : null;

  async function searchByList(event) {
    event.preventDefault();
    const inputElement = event.currentTarget.previousSibling;
    if (gameNameInput) {
      inputElement.classList.remove("invalid-input");
      const fetchedGames = await fetchGameList(gameNameInput);
      setListGameData(fetchedGames);
      return;
    } else if (!inputElement.innerText) {
      inputElement.classList.add("invalid-input")
    }
    return;
  }
  function handleInputChange(event) {
    setGameNameInput(event.target.value);
  }

  return (
    <section className="search-wrapper">
      <h2 className="search-title">Let's search your next favourite game</h2>
      <form className="search-input-wrapper">
        <input className="search-input" type="text" onChange={handleInputChange}/>
        <button className="search-submit" type="submit" onClick={searchByList}>SEARCH</button>
      </form>
      { listGameData ? <GameList listGameData={listGameData} gamesResultsArray={gamesResultsArray}/> : null }
      
    </section>
  )
}

export default SearchGameList;