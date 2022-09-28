import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import fetchSingleGame from "../../services/fetchSingleGame.js";
import parseDescriptionText from "../../services/parseDescriptionText.js"
import Carousel from "./Carousel.jsx";
import GameInformationSingle from "./GameInformationSingle.jsx";
import GameToAccountButton from "./GameToAccountButton.jsx";
import GameModal from "./GameModal.jsx";
import GameFallbackModal from "./GameFallbackModal.jsx";
import starIcon from "../../assets/star.svg"
import "../../stylesheets/Game.css";

function Game( {setMyGames} ) {
  
  const [fetchedGame,setFetchedGame] = useState(null);
  const [gameID,setGameID] = useState(useParams());
  const [isModalShow, setIsModalShow] = useState(false);
  const [isFallbackModalShow,setIsFallbackModalShow] = useState(false);
  const [isShowingAll, setIsShowingAll] = useState(false);

  async function fetchGame() {
    const id = gameID.id;
    const gameData = await fetchSingleGame(id);
    return setFetchedGame(gameData);
  }
  
  useEffect(()=>{ fetchGame() },[gameID]);

  const handleButton = (fetchedGame,event) => {
    const clickedButton = event.target.innerText;
    if (clickedButton === "PLAYING") {
      const newPlayingGame = fetchedGame;
      setMyGames(prevGames => {
        if (prevGames.playing.some( game => game.name === fetchedGame.name)) {
          setIsFallbackModalShow(true);
          setTimeout(() => setIsFallbackModalShow(false), 2000);
          return {
            ...prevGames
          }
        } else {
          setIsModalShow(true);
          setTimeout(() => setIsModalShow(false), 2000);
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
      console.log(newBeatenGame);
      setMyGames(prevGames => {
        if (prevGames.beaten.some( game => game.name === fetchedGame.name)) {
          setIsFallbackModalShow(true);
          setTimeout(() => setIsFallbackModalShow(false), 2000);
          return {
            ...prevGames
          }
        } else {
          setIsModalShow(true);
          setTimeout(() => setIsModalShow(false), 2000);
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
          setIsFallbackModalShow(true);
          setTimeout(() => setIsFallbackModalShow(false), 2000);
          return {
            ...prevGames
          }
        } else {
          setIsModalShow(true);
          setTimeout(() => setIsModalShow(false), 2000);
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
          setIsFallbackModalShow(true);
          setTimeout(() => setIsFallbackModalShow(false), 2000);
          return {
            ...prevGames
          }
        } else {
          setIsModalShow(true);
          setTimeout(() => setIsModalShow(false), 2000);
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
  }
  
  if (fetchedGame) {
    const { name,genres,metacritic,background_image,description,esrb_rating,developers } = fetchedGame;
    const descriptionToShow = parseDescriptionText(description);
    const genresToShow = genres 
      ? genres.map(genre => genre.name).join(" - ") 
      : "No data available";
    const developersToShow = developers.length 
      ? developers.map( developer => developer.name).join(" - ")
      : "No data available";    
    const esrbToShow = esrb_rating ? <GameInformationSingle title={"ESRB RATING"} subtitle={esrb_rating.name}/> : <></>;
    const metacriticToShow = metacritic ? <GameInformationSingle title="METACRITIC SCORE" subtitle={`${metacritic}/100`}/> : <></>

    return (
      <main className="game-main-wrapper">
        <h1 className="game-name">{name}</h1>
        <section className="game-title-wrapper">
          <div className="game-title-data-wrapper">
            {metacriticToShow}
            {esrbToShow}
            <h6 className="game-subtitle">GENRES</h6>
            <h5 className="game-subtitle-data">{genresToShow}</h5>
            <h6 className="game-subtitle">DEVELOPERS</h6>
            <h5 className="game-subtitle-data">{developersToShow}</h5>
          </div >
          <img className="game-title-image" src={background_image} alt={`${name} screenshot`} />
        </section>
        <section className="game-account-wrapper">
          <GameToAccountButton title="PLAYING" handleButton={handleButton} fetchedGame={fetchedGame} starIcon={starIcon}/>
          <GameToAccountButton title="BEATEN" handleButton={handleButton} fetchedGame={fetchedGame} starIcon={starIcon}/>
          <GameToAccountButton title="WISHLIST" handleButton={handleButton} fetchedGame={fetchedGame} starIcon={starIcon}/>
          <GameToAccountButton title="LIBRARY" handleButton={handleButton} fetchedGame={fetchedGame} starIcon={starIcon}/>
        </section>
        <section className="game-description-wrapper">
          <h6 className="game-subtitle">DESCRIPTION</h6>
          <p className={`game-description ${isShowingAll ? "description-full" : ""}`}>{descriptionToShow}</p>
          <button 
            className="game-description-more" 
            onClick={() => setIsShowingAll(isShowingAll => !isShowingAll)}
          >
          {isShowingAll ? "SHOW LESS" : "READ MORE"}
          </button>
        </section>
        <Carousel fetchedGame={fetchedGame} />
        <GameModal isModalShow={isModalShow} />
        <GameFallbackModal isFallbackModalShow={isFallbackModalShow} />
      </main>
    )
  }
  return <> <h3 className="game-loading">LOADING...</h3> </>

}

export default Game;