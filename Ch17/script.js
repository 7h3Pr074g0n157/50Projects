const bigBottle = document.getElementById("2l-bottle");
const remainingLiter = document.getElementById("remaining-liter");
const percentDrank = document.getElementById("percent-drank");
const littleBottles = document.querySelectorAll(
  ".little-bottles-container > div"
);
const bottleState = {
  bottlesDrank: 0,
  remainingLiter: 2,
  mlDrank: 0,
  percentDrank: 0
};

littleBottles.forEach((bottle) => {
  bottle.addEventListener("click", clickBottlesHandler);
});

function clickBottlesHandler(ev) {
  ev.preventDefault();
  const clickedBottle = ev.target;

  // console.log(clickedBottle);
  if ([...clickedBottle.classList].includes("fullLittleBottle")) {
    clickedBottle.classList.remove("fullLittleBottle");
    calcDrank(false);
  } else {
    clickedBottle.classList.add("fullLittleBottle");
    calcDrank(true);
  }

  bigBottle.style.color = bottleState.percentDrank > 50 ? "white" : "blue";
}

function calcDrank(drank) {
  if (drank) {
    bottleState.mlDrank += 0.25;
    if (bottleState.remainingLiter > 0) bottleState.remainingLiter -= 0.25;
    updateBigBottle();
  } else {
    bottleState.mlDrank -= 0.25;
    if (bottleState.remainingLiter < 2) bottleState.remainingLiter += 0.25;
    updateBigBottle();
  }
  // const bottleList = [...littleBottles];
  // bottleList.forEach((bottle, i) => {
  //   if (bottle.id === clickedBottle.id) {
  //     bottleState.bottlesDrank = i + 1 - bottleState.bottlesDrank;
  //     console.log("loop", i, bottleState.bottlesDrank);
  //   }
  // });
}

function updateBigBottle() {
  bottleState.percentDrank = (bottleState.mlDrank / 2) * 100;

  bigBottle.style.background = `linear-gradient(to top, 
      #58a7f2 0%, 
      #58a7f2 ${bottleState.percentDrank}%, 
      #fff ${bottleState.percentDrank}%, 
      #fff 100%`;

  percentDrank.textContent = bottleState.percentDrank + " %";
  remainingLiter.textContent = bottleState.remainingLiter + "L\nremaining";
}
