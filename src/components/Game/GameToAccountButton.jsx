export default function GameToAccountButton({ fetchedGame,handleButton,starIcon, title }) {
  const titleToClass = title.toLowerCase();
  
  return(
    <button onClick={(event) => handleButton(fetchedGame,event)} className={`game-account-${titleToClass}`}>
      <img className="game-account-star-icon" src={starIcon} alt="star icon" />
      {title}
    </button>
  )
}