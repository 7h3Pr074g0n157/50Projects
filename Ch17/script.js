const bigBottle = document.getElementById("2l-bottle");
const remainingLiter = document.getElementById("remaining-liter");
const percentDrank = document.getElementById("percent-drank");
const littleBottlesContainer = document.querySelector(
  ".little-bottles-container"
);
const littleBottles = [...littleBottlesContainer.children];

littleBottles.forEach((bottle) => {
  bottle.addEventListener("click", clickBottlesHandler);
});

function clickBottlesHandler(ev) {
  ev.preventDefault();
  const clickedBottle = ev.target;

  if ([...clickedBottle.classList].includes("fullLittleBottle")) {
    calcBottleState(false, clickedBottle);
  } else {
    calcBottleState(true, clickedBottle);
  }
}

function calcBottleState(drank, clickedBottle) {
  const bottleState = {
    clickedBottle: clickedBottle,
    ml: 0.25,
    index: littleBottles.indexOf(clickedBottle) + 1,
    bottlesDrank: 0,
    mlDrank: 0,
    percentDrank: 0,
    remainingLiter: 2
  };

  if (drank) {
    bottleState.mlDrank = bottleState.ml * bottleState.index;
    bottleState.remainingLiter -= bottleState.ml * bottleState.index;
  } else {
    bottleState.mlDrank -= bottleState.ml * bottleState.index;
    bottleState.remainingLiter += bottleState.ml * bottleState.index;
  }
  bottleState.percentDrank = (bottleState.mlDrank / 2) * 100;

  updateBigBottle(bottleState);
  updateLittleBottles(drank, bottleState);

  console.log(
    bottleState.index,
    bottleState.mlDrank,
    bottleState.percentDrank,
    bottleState.remainingLiter
  );
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
