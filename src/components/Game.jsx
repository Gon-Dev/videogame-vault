import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import fetchSingleGame from "../services/fetchSingleGame.js";
import parseDescriptionText from "../services/parseDescriptionText.js"
import "../stylesheets/Game.css";
import handleMoreClick from "../services/handlers.js"
function Game( ) {
  const [fetchedGame,setFetchedGame] = useState(null);
  useEffect( ()=> {
    console.log(fetchedGame);
  },[fetchedGame]);
  
  const [gameID,setGameID] = useState(useParams());

  async function fetchGame() {
    const id = gameID.id;
    const gameData = await fetchSingleGame(id); // armar un fetchSingleGame y reemplazar fetchGameList
    return setFetchedGame(gameData);
  }
  useEffect(()=>{ fetchGame() },[gameID]);
  if (fetchedGame) {
    const {name,genres,platforms,metacritic,background_image, description , esrb_rating , developers} = fetchedGame;
    const descriptionToShow = parseDescriptionText(description);
    const genresToShow = genres ? genres.map(genre => genre.name).join(" - ") : "No data available";
    const developersToShow = developers ? developers.map( developer => developer.name).join(" - ") : "No data available";
    const esrbToShow = esrb_rating ? esrb_rating.name : "No data available";
    return (
      <main className="game-main-wrapper">
        <h1 className="game-name">{name}</h1>
        <section className="game-title-wrapper">
          <div>
            <h6 className="game-subtitle">METACRITIC SCORE</h6>
            <h5 className="game-subtitle-data">{metacritic}/100</h5>
            <h6 className="game-subtitle">GENRES</h6>
            <h5 className="game-subtitle-data">{genresToShow}</h5>
            <h6 className="game-subtitle">ESRB RATING</h6>
            <h5 className="game-subtitle-data">{esrbToShow}</h5>
            <h6 className="game-subtitle">DEVELOPERS</h6>
            <h5 className="game-subtitle-data">{developersToShow}</h5>
          </div >
          <img className="game-title-image" src={background_image} alt="background" />
        </section>
        <section className="game-description-wrapper">
          <h6 className="game-subtitle">DESCRIPTION</h6>
          <p className="game-description">{descriptionToShow}</p>
          <br />
          <button className="game-description-more" onClick={handleMoreClick}>SHOW MORE . . .</button>
        </section>
      </main>
    )
  }
  return <></>

}

export default Game;