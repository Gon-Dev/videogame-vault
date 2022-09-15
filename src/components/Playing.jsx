import "../stylesheets/User.css";
function Playing( {myGames} ) {

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
export default Playing;