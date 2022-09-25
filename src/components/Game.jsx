import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import fetchSingleGame from "../services/fetchSingleGame.js";
import parseDescriptionText from "../services/parseDescriptionText.js"
import Gallery from "./Gallery.jsx";
import starIcon from "../assets/star.svg"
import "../stylesheets/Game.css";

function Game( {setMyGames} ) {
  
  const [fetchedGame,setFetchedGame] = useState(null);
  
  const [gameID,setGameID] = useState(useParams());

  const [isModalShow, setIsModalShow] = useState(false);

  const [isShowingAll, setIsShowingAll] = useState(false);

  async function fetchGame() {
    const id = gameID.id;
    const gameData = await fetchSingleGame(id);
    return setFetchedGame(gameData);
  }
  
  useEffect(()=>{ fetchGame() },[gameID]);

  function handleButton (fetchedGame,event) {
    const clickedButton = event.target.innerText;
    if (clickedButton === "PLAYING") {
      const newPlayingGame = fetchedGame;
      setMyGames(prevGames => {
        if (prevGames.playing.some( game => game.name === fetchedGame.name)) {
          return {
            ...prevGames
          }
        } else {
          return {
            ...prevGames,
            playing: [
              ...prevGames.playing,
              newPlayingGame
            ]
          }
        }
      })
    }
    if (clickedButton === "BEATEN") {
      const newBeatenGame = fetchedGame;
      setMyGames(prevGames => {
        if (prevGames.beaten.some( game => game.name === fetchedGame.name)) {
          return {
            ...prevGames
          }
        } else {
          return {
            ...prevGames,
            beaten: [
              ...prevGames.beaten,
              newBeatenGame
            ]
          }
        }
      })
    }
    if (clickedButton === "WISHLIST") {
      const newWishlistGame = fetchedGame;
      setMyGames(prevGames => {
        if (prevGames.wishlist.some( game => game.name === fetchedGame.name)) {
          return {
            ...prevGames
          }
        } else {
          return {
            ...prevGames,
            wishlist: [
              ...prevGames.wishlist,
              newWishlistGame
            ]
          }
        }
      })
    }
    if (clickedButton === "LIBRARY") {
      const newLibraryGame = fetchedGame;
      setMyGames(prevGames => {
        if (prevGames.library.some( game => game.name === fetchedGame.name)) {
          return {
            ...prevGames
          }
        } else {
          return {
            ...prevGames,
            library: [
              ...prevGames.library,
              newLibraryGame
            ]
          }
        }
      })
    }
    setIsModalShow(true);
    setTimeout(() => setIsModalShow(false), 2000);
  }
  if (fetchedGame) {
    const { name,genres,metacritic,background_image,description,esrb_rating,developers } = fetchedGame;
    const descriptionToShow = parseDescriptionText(description);
    const genresToShow = genres ? genres.map(genre => genre.name).join(" - ") : "No data available";
    const developersToShow = developers.length ? developers.map( developer => developer.name).join(" - ") : "No data available";
    const esrbToShow = esrb_rating ? 
    <>
      <h6 className="game-subtitle">ESRB RATING</h6>
      <h5 className="game-subtitle-data">{esrb_rating.name}</h5>
    </>
    : <></>;
    const metacriticToShow = metacritic ? 
    <>
      <h6 className="game-subtitle">METACRITIC SCORE</h6>
      <h5 className="game-subtitle-data">{metacritic}/100</h5>
    </>
    : <></>;

    return (
      <main className="game-main-wrapper">
        <h1 className="game-name">{name}</h1>
        <section className="game-title-wrapper">
          <div className="game-title-data-wrapper">
            {metacriticToShow}
            <h6 className="game-subtitle">GENRES</h6>
            <h5 className="game-subtitle-data">{genresToShow}</h5>
            <h6 className="game-subtitle">DEVELOPERS</h6>
            <h5 className="game-subtitle-data">{developersToShow}</h5>
            {esrbToShow}
          </div >
          <img className="game-title-image" src={background_image} alt={`${name} screenshot`} />
        </section>
        <section className="game-account-wrapper">
          <button onClick={(event) => handleButton(fetchedGame,event)} className="game-account-playing">
            <img className="game-account-star-icon" src={starIcon} alt="star icon" />
            PLAYING
          </button>
          <button onClick={(event) => handleButton(fetchedGame,event)} className="game-account-beaten">
            <img className="game-account-star-icon" src={starIcon} alt="star icon" />
            BEATEN
          </button>
          <button onClick={(event) => handleButton(fetchedGame,event)} className="game-account-wishlist">
            <img className="game-account-star-icon" src={starIcon} alt="star icon" />
            ADD TO WISHLIST
          </button>
          <button onClick={(event) => handleButton(fetchedGame,event)} className="game-account-library">
            <img className="game-account-star-icon" src={starIcon} alt="star icon" />
            ADD TO LIBRARY
          </button>
        </section>
        <section className="game-description-wrapper">
          <h6 className="game-subtitle">DESCRIPTION</h6>
          <p className={`game-description ${isShowingAll ? "description-full" : ""}`}>{descriptionToShow}</p>
          <br />
          <button className="game-description-more" onClick={() => setIsShowingAll(isShowingAll => !isShowingAll)}>READ MORE</button>
        </section>
        <Gallery fetchedGame={fetchedGame}/>
        <div className={`game-added-modal-wrapper ${isModalShow ? "" : "modal-hidden"}`}>
          GAME ADDED TO YOUR VAULT
        </div>
      </main>
    )
  }
  return <> <h3 className="game-loading">LOADING...</h3> </>

}

export default Game;