const navbarBox = document.getElementById("navbar-box");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");

navbarBox.addEventListener("click", () => {
  const container = document.getElementById("container");
  bars.classList.toggle("hidden");
  xmark.classList.toggle("hidden");

  container.classList.toggle('transform')
});
