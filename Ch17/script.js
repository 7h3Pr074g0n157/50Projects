const bigBottle = document.getElementById("2l-bottle");
const littleBottles = document.querySelectorAll(
  ".little-bottles-container > div"
);
let remainingLiter = 2,
  mlDrank = 0,
  percentDrank = 0;

littleBottles.forEach((bottle) => {
  bottle.addEventListener("click", clickBottlesHandler);
});

function clickBottlesHandler(ev) {
  ev.preventDefault();
  const clickedBottle = ev.target;

  if ([...clickedBottle.classList].includes("fullLittleBottle")) {
    clickedBottle.classList.remove("fullLittleBottle");

    if (remainingLiter < 2) remainingLiter += 0.25;
    handleRemainingLiter();

    mlDrank -= 0.25;
    changeLinearGradient();
  } else {
    clickedBottle.classList.add("fullLittleBottle");

    if (remainingLiter > 0) remainingLiter -= 0.25;
    handleRemainingLiter();

    mlDrank += 0.25;
    changeLinearGradient();
  }

  bigBottle.style.color = percentDrank > 50 ? "white" : "blue";
}

function changeLinearGradient() {
  percentDrank = (mlDrank / 2) * 100;
  bigBottle.style.background = `linear-gradient(to top, 
      #58a7f2 0%, 
      #58a7f2 ${percentDrank}%, 
      #fff ${percentDrank}%, 
      #fff 100%`;
}

function handleRemainingLiter() {
  bigBottle.textContent = remainingLiter + "L\nremaining";
}
