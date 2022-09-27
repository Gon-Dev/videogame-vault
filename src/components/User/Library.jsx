import { Link } from "react-router-dom";

function Library( {myGames} ) {

  const gamesToShow = myGames ? myGames.library.map( game => {

    const owned = game.added_by_status.owned ? 
      <div>
        <h6>OWNED BY</h6>
        <p>{game.added_by_status.owned} players</p>
      </div> : <></>;
    const dropped = game.added_by_status.dropped ? 
    <div>
      <h6>DROPPED BY</h6>
      <p>{game.added_by_status.dropped} players</p>
    </div> : <></>;
    return(
      <li key={game.id} className="my-games-game-wrapper" style={{backgroundImage: `url(${game.background_image})`}}>
        
        <h2 className="my-games-game-title">{game.name}</h2>

        <aside className="rawg-stats">
          <h5>COMMUNITY STATS</h5>
          {owned}
          {dropped}
        </aside>
        <button className="my-games-game-link-button">
          <Link className="my-games-game-link" to={`/game/${game.id}`}>More . . .</Link>
        </button>
      </li>
    )
  }) : <h1>"Nothing here!"</h1>
  
  return(
    <section className="my-games-section-wrapper">
      <ul>
        {gamesToShow}
      </ul>
    </section>
  )
}
export default Library;