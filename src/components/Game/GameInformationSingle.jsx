export default function GameInformationSingle({title,subtitle}) {
  return (
    <>
      <h6 className="game-subtitle">{title}</h6>
      <h5 className="game-subtitle-data">{subtitle}</h5>
    </>
  )
}