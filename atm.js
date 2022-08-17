
let cardInserted = false;
let authenticated = false;
let checkingBal = 550.64;
let savingsBal = 2343.90;



window.addEventListener('DOMContentLoaded', (event) => {
  console.log("dom loaded");
  const cardSlot = document.querySelector(".cardSlot");
  cardSlot.addEventListener('click', insertCardClick);
  const keys = document.querySelectorAll(".keys");
  keys.forEach((key) => {
    key.addEventListener('click', keyClick);
  });
} )

const keyClick = (e) => {
  console.log(e.target.innerHTML);
}

const insertCardClick = () =>  {
  //prevent multiple card insert clicks
  if (cardInserted) return;
  cardInserted = true;

  //blank the screen / remove background image & filter
  const screen = document.querySelector(".screen");
  screen.style.backgroundImage = 'none';
  screen.style.filter = 'none';
  const screen2 = document.querySelector(".screenInside");
  screen2.innerHTML += "Welcome to A.T.M Bank. Thank you for inserting. ";
};