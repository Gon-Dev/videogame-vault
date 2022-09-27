export default function GameModal({isModalShow}) {
  return(
    <div className={`game-added-modal-wrapper ${isModalShow ? "" : "modal-hidden"}`}>
      GAME ADDED TO YOUR VAULT
    </div>
  )
}