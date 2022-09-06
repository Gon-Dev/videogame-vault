export function handleMoreClick(event) {
  const buttonElement = event.target;
  const descriptionElement = document.querySelector(".game-description");
  descriptionElement.style.maxHeight === "fit-content" ? descriptionElement.style.maxHeight = "5.8rem" : descriptionElement.style.maxHeight = "fit-content";
  descriptionElement.style.maxHeight === "fit-content" ? buttonElement.innerText = "HIDE" : buttonElement.innerText = "READ MORE";
}
export function handleGameUserButtons(event) {
  const clickedButtonClass = event.target.className;
  if (clickedButtonClass === "game-account-playing") {
    console.log("clicked playing");
  } else if (clickedButtonClass === "game-account-beaten") {
    console.log("clicked beaten");
  } else if (clickedButtonClass === "game-account-whishlist") {
    console.log("clicked whishlist");
  } else if (clickedButtonClass === "game-account-library") {
    console.log("clicked library");
  }
}
