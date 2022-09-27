export default function GameFallbackModal({isFallbackModalShow}) {
  return(
    <div className={`game-added-modal-wrapper ${isFallbackModalShow ? "" : "modal-hidden"}`}>
      GAME ALREADY IN VAULT
    </div>
  )
}