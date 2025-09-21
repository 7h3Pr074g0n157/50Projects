const container = document.querySelector(".container");
const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("hidden");
  container.classList.toggle("center");
});
