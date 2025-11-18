const bigBottle = document.getElementById("2l-bottle");
const littleBottles = document.querySelectorAll(
  ".little-bottles-container > div"
);
const remainingLiter = 2;
const percentDrank = 0;
// console.log(littleBottles);
// console.log(bigBottle);

littleBottles.forEach((bottle) => {
  bottle.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedBottle = e.target;
    // console.log([...clickedBottle.classList]);
    if ([...clickedBottle.classList].includes("fullLittleBottle")) {
      clickedBottle.classList.remove("fullLittleBottle");
    } else {
      clickedBottle.classList.add("fullLittleBottle");
    }
  });
});
