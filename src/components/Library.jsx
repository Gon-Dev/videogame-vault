export default function Library({ myGames }) {
  const gamesToShow = myGames ? myGames.library.map( game => {
    return(
      <p>{game.name}</p>
    )
  }) : "Nothing here!"
  return(
    <>
    <h5>Library</h5>
    {gamesToShow}
    </>
  )
}