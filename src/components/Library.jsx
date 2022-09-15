import "../stylesheets/User.css";
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
        {/* link con Router a detalle del juego */}
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
export default Library;