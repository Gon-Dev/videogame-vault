import "../stylesheets/User.css";
function Beaten( {myGames} ) {

  const gamesToShow = myGames ? myGames.beaten.map( game => {
    console.log(game);
    const beaten = game.added_by_status.dropped ? 
      <div>
        <h6>BEATEN BY</h6>
        <p>{game.added_by_status.beaten} players</p>
      </div> : <></>;
    const dropped = game.added_by_status.dropped ? 
    <div>
      <h6>DROPPED BY</h6>
      <p>{game.added_by_status.dropped} players</p>
    </div> : <></>;
    return(
      <li key={game.id} className="my-games-game-wrapper" style={{backgroundImage: `url(${game.background_image})`}}>
        
        <h2>{game.name}</h2>

        <aside className="rawg-stats">
          {beaten}
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
export default Beaten;