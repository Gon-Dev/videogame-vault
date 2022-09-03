import { Link } from 'react-router-dom';
import '../stylesheets/GameList.css';
function GameList( {gamesResultsArray} ) {
  if (gamesResultsArray) {
    const searchResults = gamesResultsArray.map( game => {
      const gameName = game.name;
      const platforms = game.platforms.map( game => game.platform.name).join(" - ");
      console.log(platforms);
      return (
        <li className="list-item" key={gameName}>
          <Link className="list-item-link" to={`/game/${game.id}`}>{gameName}</Link>
          {platforms}
        </li>
      )
    });
    return(
      <ul className="list-wrapper">{searchResults}</ul>
    )
  } else {
    return null;
  }
}
export default GameList;