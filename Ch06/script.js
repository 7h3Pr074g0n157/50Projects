const img = document.getElementById("img");
const countdownBox = document.getElementById("countdown-box");
const countdown = document.getElementById("countdown");

document.addEventListener("DOMContentLoaded", () => {
  let countdownNum = 100;
  let opacityNum = 1;
  let blurNum = 30;

  function setCountdown() {
    countdown.textContent = countdownNum;
    countdownBox.style.opacity = opacityNum;
    img.style.filter = `blur(${blurNum}px)`;
    countdownNum--;
    opacityNum -= 0.05;
    blurNum -= 1;
    console.log(countdownNum, opacityNum, blurNum);
    if (countdownNum <= 0 && opacityNum <= 0 && blurNum <= 0) {
      clearInterval(interval);
    }
  }
  const interval = setInterval(setCountdown, 200);
  console.log(interval);
});
