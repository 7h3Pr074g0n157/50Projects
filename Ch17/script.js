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
    handleRemainingLiter(false);
    changeLinearGradient(false);
  } else {
    clickedBottle.classList.add("fullLittleBottle");
    handleRemainingLiter(true);
    changeLinearGradient(true);
  }

  bigBottle.style.color = percentDrank > 50 ? "white" : "blue";
}

function changeLinearGradient(changeMLdrank) {
  mlDrank = changeMLdrank ? mlDrank + 0.25 : mlDrank - 0.25;
  percentDrank = (mlDrank / 2) * 100;

  bigBottle.style.background = `linear-gradient(to top, 
      #58a7f2 0%, 
      #58a7f2 ${percentDrank}%, 
      #fff ${percentDrank}%, 
      #fff 100%`;
}

function handleRemainingLiter(changeRemainingLiter) {
  if (changeRemainingLiter) {
    if (remainingLiter > 0) remainingLiter -= 0.25;
  } else {
    if (remainingLiter < 2) remainingLiter += 0.25;
  }
  bigBottle.textContent = remainingLiter + "L\nremaining";
}
