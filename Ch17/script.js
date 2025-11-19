const bigBottle = document.getElementById("2l-bottle");
const littleBottles = document.querySelectorAll(
  ".little-bottles-container > div"
);
let remainingLiter = 2,
  mlDrank = 0,
  percentDrank = 0;

littleBottles.forEach((bottle) => {
  bottle.addEventListener("click", (e) => {
    e.preventDefault();

    const clickedBottle = e.target,
      bgBlue = "#58a7f2",
      bgWhite = "#fff";

    let startPoint = 0,
      secondPoint = percentDrank,
      thirdPoint = percentDrank,
      stopPoint = 100;

    if ([...clickedBottle.classList].includes("fullLittleBottle")) {
      clickedBottle.classList.remove("fullLittleBottle");
      if (remainingLiter < 2) remainingLiter += 0.25;
      bigBottle.textContent = remainingLiter + "L";

      mlDrank -= 0.25;
      percentDrank = (mlDrank / 2) * 100;

      secondPoint = percentDrank;
      thirdPoint = percentDrank;

      bigBottle.style.background = `linear-gradient(to top, 
      ${bgBlue} ${startPoint}%, 
      ${bgBlue} ${secondPoint}%, 
      ${bgWhite} ${thirdPoint}%, 
      ${bgWhite} ${stopPoint}%`;
    } else {
      clickedBottle.classList.add("fullLittleBottle");
      if (remainingLiter > 0) remainingLiter -= 0.25;
      bigBottle.textContent = remainingLiter + "L";

      mlDrank += 0.25;
      percentDrank = (mlDrank / 2) * 100;

      secondPoint = percentDrank;
      thirdPoint = percentDrank;

      bigBottle.style.background = `linear-gradient(to top, 
      ${bgBlue} ${startPoint}%, 
      ${bgBlue} ${secondPoint}%, 
      ${bgWhite} ${thirdPoint}%, 
      ${bgWhite} ${stopPoint}%`;
    }

    bigBottle.style.color = percentDrank > 50 ? bgWhite : "blue";
  });
});
