import { Link } from 'react-router-dom';
import '../stylesheets/GameList.css';
function GameList( {gamesResultsArray} ) {
  if (gamesResultsArray) {
    const searchResults = gamesResultsArray.map( game => {
      const gameName = game.name;
      const platforms = game.platforms.map( game => game.platform.name).join(" - ");
      const genres = game.genres.map (genre => genre.name).join(" - ");
      const image = game.background_image;
      // console.log();
      return (
        <li className="list-item" key={gameName}>
          <img className="list-item-image" src={image} alt="" />
          <section className="list-item-data-wrapper">
            <p className="list-item-overline">{genres}</p>
            <Link className="list-item-link" to={`/game/${game.id}`}>{gameName}</Link>
            <p className="list-item-platforms">{platforms}</p>
          </section>
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