import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import fetchSingleGame from "../services/fetchSingleGame.js";
import parseDescriptionText from "../services/parseDescriptionText.js"
import handleMoreClick from "../services/handlers.js"
import fetchGallery from "../services/fetchGallery.js"
import "../stylesheets/Game.css";

function Game( ) {
  const [fetchedGame,setFetchedGame] = useState(null);  
  const [gameID,setGameID] = useState(useParams());
  const [gallery,setGallery] = useState([]);
  async function fetchGame() {
    const id = gameID.id;
    const gameData = await fetchSingleGame(id);
    return setFetchedGame(gameData);
  }
  async function fetchGallery(gameName) {
    try {
      const response = await fetch(`https://api.rawg.io/api/games/${gameName}/screenshots?key=c41ddde4984541a6aff7238cd9b5f310`);
      const data = await response.json();
      setGallery(data.results);
    } 
    catch (error){
      return null;
    }
  }
  useEffect(()=>{ fetchGame() },[gameID]);
  useEffect(()=>{ fetchedGame && fetchGallery(fetchedGame.slug) },[fetchedGame]);


  if (fetchedGame) {
    const { name,genres,metacritic,background_image,description,esrb_rating,developers } = fetchedGame;
    const descriptionToShow = parseDescriptionText(description);
    const genresToShow = genres ? genres.map(genre => genre.name).join(" - ") : "No data available";
    const developersToShow = developers ? developers.map( developer => developer.name).join(" - ") : "No data available";
    const esrbToShow = esrb_rating ? esrb_rating.name : "No data available";
    const galleryToShow = gallery ? gallery.map( screen => {
      return (
        <img src={screen.image} key={screen.id} className="game-screenshot"/>
      )
    }) : <></>;
    return (
      <main className="game-main-wrapper">
        <h1 className="game-name">{name}</h1>
        <section className="game-title-wrapper">
          <div className="game-title-data-wrapper">
            <h6 className="game-subtitle">METACRITIC SCORE</h6>
            <h5 className="game-subtitle-data">{metacritic}/100</h5>
            <h6 className="game-subtitle">GENRES</h6>
            <h5 className="game-subtitle-data">{genresToShow}</h5>
            <h6 className="game-subtitle">ESRB RATING</h6>
            <h5 className="game-subtitle-data">{esrbToShow}</h5>
            <h6 className="game-subtitle">DEVELOPERS</h6>
            <h5 className="game-subtitle-data">{developersToShow}</h5>
          </div >
          <img className="game-title-image" src={background_image} alt={`${name} screenshot`} />
        </section>
        <section className="game-description-wrapper">
          <h6 className="game-subtitle">DESCRIPTION</h6>
          <p className="game-description">{descriptionToShow}</p>
          <br />
          <button className="game-description-more" onClick={handleMoreClick}>READ MORE</button>
        </section>
        <section className="game-gallery-wrapper">
          {galleryToShow}
        </section>
      </main>
    )
  }
  return <> <h1>LOADING</h1> </>

}

export default Game;