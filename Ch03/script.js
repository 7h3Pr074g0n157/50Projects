const progSteps = document.getElementsByClassName("steps");
const progBetween = document.getElementsByClassName("between");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
let steps = 0;

btnNext.addEventListener("click", () => {
  if (steps < 3) {
    progBetween[steps].classList.add("active-between");
    steps++;
    progSteps[steps].classList.add("active-step");
  } else {
    return;
  }
  if (steps === 1) btnPrev.classList.add("active-button");
  if (steps === 3) btnNext.classList.remove("active-button");
});

btnPrev.addEventListener("click", () => {
  if (steps > 0) {
    progSteps[steps].classList.remove("active-step");
    steps--;
    progBetween[steps].classList.remove("active-between");
  } else {
    return;
  }
  if (steps === 0) btnPrev.classList.remove("active-button");
  if (steps === 2) btnNext.classList.add("active-button");
});
