const refreshGoal = document.getElementById("refresh-goal");
const bigBottle = document.getElementById("2l-bottle");
const remainingLiter = document.getElementById("remaining-liter");
const percentDrank = document.getElementById("percent-drank");
const littleBottlesContainer = document.querySelector(
  ".little-bottles-container"
);
const littleBottles = [...littleBottlesContainer.children];

refreshGoal.addEventListener("click", storeDrinkingGoals);
littleBottles.forEach((bottle) => {
  bottle.addEventListener("click", clickBottlesHandler);
});

function clickBottlesHandler(ev) {
  ev.preventDefault();
  const clickedBottle = ev.target;

  if ([...clickedBottle.classList].includes("fullLittleBottle")) {
    calcDrank(false, clickedBottle);
  } else {
    calcDrank(true, clickedBottle);
  }
}

function storeDrinkingGoals(clickedBottle, value0 = 0, value2 = 2) {
  return {
    clickedBottle: clickedBottle,
    ml: 0.25,
    index: littleBottles.indexOf(clickedBottle) + 1,
    bottlesDrank: value0,
    mlDrank: value0,
    percentDrank: value0,
    remainingLiter: value2
  };
}

function calcDrank(drank, clickedBottle) {
  const bottleState = storeDrinkingGoals(clickedBottle);

  bottleState.mlDrank = bottleState.ml * bottleState.index;
  bottleState.percentDrank = (bottleState.mlDrank / 2) * 100;
  if (drank) {
    bottleState.remainingLiter -= bottleState.mlDrank;
  } else {
    bottleState.remainingLiter = bottleState.mlDrank;
  }

  updateBigBottle(bottleState);
  updateLittleBottles(bottleState);
}

function updateBigBottle(bottleState) {
  bigBottle.style.background = `linear-gradient(to top, 
      #58a7f2 0%, 
      #58a7f2 ${bottleState.percentDrank}%, 
      #fff ${bottleState.percentDrank}%, 
      #fff 100%`;

  percentDrank.textContent = bottleState.percentDrank + " %";
  remainingLiter.textContent = bottleState.remainingLiter + "L\nremaining";
  bigBottle.style.color = bottleState.percentDrank > 50 ? "white" : "blue";
}

function updateLittleBottles(bottleState) {
  const maxIndex = bottleState.index - 1;

  littleBottles.forEach((bottle, i) => {
    bottle.classList.remove("fullLittleBottle");
    if (i <= maxIndex) {
      bottle.classList.add("fullLittleBottle");
    }
  });
}
