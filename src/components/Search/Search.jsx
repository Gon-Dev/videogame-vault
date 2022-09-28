import React, {useState} from "react";
import fetchGameList from '../../services/fetchGameList.js'
import GameList from './GameList.jsx'
import '../../stylesheets/Search.css'
import search from '../../assets/search.svg'
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
      setTimeout( () => inputElement.classList.remove("invalid-input"),2000)
    }
    return;
  }
  function handleInputChange(event) {
    setGameNameInput(event.target.value);
  }

  return (
    <main className="game-list-main-wrapper">
      <section className="search-wrapper">
        <h1 className="search-title">Game search</h1>
        <form className="search-input-wrapper">
          <input className="search-input" type="text" autoFocus placeholder="Search" onChange={handleInputChange}/>
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