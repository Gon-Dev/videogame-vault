export default function Wishlist({ myGames }) {
  const gamesToShow = myGames ? myGames.wishlist.map( game => {
    return(
      <p>{game.name}</p>
    )
  }) : "Nothing here!"
  return(
    <>
    <h5>Wishlist</h5>
    {gamesToShow}
    </>
  )
}