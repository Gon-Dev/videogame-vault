import React, {useState,useEffect} from "react";
function Beaten( {myGames} ) {
  console.log(myGames);
  const gamesToShow = myGames ? myGames.beaten.map( game => {
    return(
      <p>{game.name}</p>
    )
  }) : "Nothing here!"
  
  return(
    <aside>
      <h5>Beaten</h5>
      {gamesToShow}
    </aside>
  )
}
export default Beaten;