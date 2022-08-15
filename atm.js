
window.addEventListener('DOMContentLoaded', (event) => {
  console.log("dom loaded");
  const cardSlot = document.querySelector(".cardSlot");
  cardSlot.addEventListener('click', insertCardClick);
} )

let cardInserted = false;

function insertCardClick(e) {
  //prevent multiple card insert clicks
  if (cardInserted) return;
  cardInserted = true;

  //blank the screen / remove background image & filter
  const screen = document.querySelector(".screen");
  screen.style.backgroundImage = 'none';
  screen.style.filter = 'none';
  const screen2 = document.querySelector(".screenInside");
  screen2.innerHTML += "Welcome to A.T.M Bank. Thank you for inserting. ";
}