window.onload = function () {

// HTML Elements
  const status = document.querySelector("#status");

  const restartButton = document.querySelector(".restartButton");

  const cellDivs = document.querySelectorAll(".cell");


//Booleans

let xIsNext = true;
let gameIsLive = true;


// Event Handlers

const handleReset = (e) => {
  console.log("you clicked me");
}

const handleClickedCell = (e) => {

  if (xIsNext) {
    e.target.classList.add('x');
    xIsNext = !xIsNext;
  } else {
    e.target.classList.add('o');
  }
}

//Event Listerns

status.addEventListener("click", handleReset);

for (cellDiv of cellDivs) {
  cellDiv.addEventListener("click", handleClickedCell);
}




};
