function handleMoreClick() {
  const descriptionElement = document.querySelector(".game-description");
  descriptionElement.style.maxHeight === "fit-content" ? descriptionElement.style.maxHeight = "5.8rem" : descriptionElement.style.maxHeight = "fit-content";

}
export default handleMoreClick;