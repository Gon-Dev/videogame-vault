import Beaten from "./Beaten";
import Playing from "./Playing";
function User( {myGames} ) {


  return (
    <main>
      <Playing myGames={myGames} />
      <Beaten myGames={myGames} />
    </main>
    )
}

export default User;