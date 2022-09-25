export function handleFilterButton(event) {
  const buttons = document.querySelectorAll(".user-filter-button");
  buttons.forEach( button => button.classList.remove("button-active"));
  event.target.classList.add("button-active");
}