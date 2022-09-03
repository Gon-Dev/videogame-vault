import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import fetchSingleGame from "../services/fetchSingleGame.js";
function Game( ) {
  const [fetchedGame,setFetchedGame] = useState({});
  const [gameID,setGameID] = useState(useParams());

  async function fetchGame() {
    const id = gameID.id;
    const gameData = await fetchSingleGame(id); // armar un fetchSingleGame y reemplazar fetchGameList
    setFetchedGame(gameData);
  }
  useEffect(()=>{ fetchGame() },[gameID])

  const {name,genres,platforms,metacritic} = fetchedGame;
  console.log(name,genres,platforms,metacritic);
  return (
    <>
      <h1>Game</h1>
      <p>{name}</p>
      <p>{metacritic}</p>
    </>
  )
}

export default Game;