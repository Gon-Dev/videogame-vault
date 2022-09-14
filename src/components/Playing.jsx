import React, {useState,useEffect} from "react";
function Playing( {myGames} ) {
  console.log(myGames);
  const gamesToShow = myGames ? myGames.playing.map( game => {
    return(
      <p>{game.name}</p>
    )
  }) : "Nothing here!"
  
  return(
    <aside>
      <h5>Playing</h5>
      {gamesToShow}
    </aside>
  )
}
export default Playing;