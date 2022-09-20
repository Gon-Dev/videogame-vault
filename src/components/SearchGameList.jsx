import React, {useState} from "react";
import fetchGameList from '../services/fetchGameList.js'
import GameList from './GameList.jsx'
import '../stylesheets/SearchGameList.css'
import search from '../assets/search.svg'
function SearchGameList() {
  const [gameNameInput,setGameNameInput] = useState("");
  const [listGameData, setListGameData] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const gamesResultsArray = listGameData ? listGameData.results : null;

  async function searchByList(event) {
    event.preventDefault();
    const inputElement = event.currentTarget.previousSibling;
    if (gameNameInput) {
      setIsLoading(true);
      setListGameData(null);
      inputElement.classList.remove("invalid-input");
      const fetchedGames = await fetchGameList(gameNameInput);
      setIsLoading(false);
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
    <main className="game-list-main-wrapper">
      <section className="search-wrapper">
        <h5 className="search-title">Game search</h5>
        <form className="search-input-wrapper">
          <input className="search-input" type="text" onChange={handleInputChange}/>
          <button className="search-submit" type="submit" onClick={searchByList}>
            <img className="search-button-icon" src={search} alt="" />
          </button>
        </form>
      </section>
      { isLoading ? <h3 className="game-list-loading">LOADING. . .</h3> : <></>}
      { listGameData ? <GameList listGameData={listGameData} gamesResultsArray={gamesResultsArray}/> : <></> }
    </main>
  )
}

export default SearchGameList;