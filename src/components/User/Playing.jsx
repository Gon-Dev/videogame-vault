import { Link } from "react-router-dom";
import deleteIcon from "../../assets/delete.svg"
function Playing( {myGames,deleteGame} ) {

  const gamesToShow = myGames ? myGames.playing.map( game => {

    const playing = game.added_by_status.playing ? 
      <div>
        <h6>PLAYING</h6>
        <p>{game.added_by_status.playing} players</p>
      </div> : <></>;
    const beaten = game.added_by_status.beaten ? 
    <div>
      <h6>BEATEN BY</h6>
      <p>{game.added_by_status.dropped} players</p>
    </div> : <></>;
    return(
      <li key={game.id} className="my-games-game-wrapper" style={{backgroundImage: `url(${game.background_image})`}}>
        
        <h2 className="my-games-game-title">{game.name}</h2>

        <aside className="rawg-stats">
          <h5>COMMUNITY STATS</h5>
          {playing}
          {beaten}
        </aside>
        <button className="my-games-game-link-button">
          <Link className="my-games-game-link" to={`/game/${game.id}`}>More . . .</Link>
        </button>
        <button 
          className="my-games-game-delete-button"
          onClick={() => deleteGame(game)} 
        >
          <img 
            className="my-games-game-delete-icon" 
            src={deleteIcon} 
            alt="delete icon" 
          />
        </button>
      </li>
    )
  }) : "Nothing here!"
  
  return(
    <section className="my-games-section-wrapper">
      <ul>
        {gamesToShow}
      </ul>
    </section>
  )
}
export default Playing;