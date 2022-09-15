export function handleMoreClick(event) {
  const buttonElement = event.target;
  const descriptionElement = document.querySelector(".game-description");
  descriptionElement.style.maxHeight === "fit-content" ? descriptionElement.style.maxHeight = "5.8rem" : descriptionElement.style.maxHeight = "fit-content";
  descriptionElement.style.maxHeight === "fit-content" ? buttonElement.innerText = "HIDE" : buttonElement.innerText = "READ MORE";
}
export function handleFilterButton(event) {
  const buttons = document.querySelectorAll(".user-filter-button");
  buttons.forEach( button => button.classList.remove("button-active"));
  event.target.classList.add("button-active");
}