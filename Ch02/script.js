const imgs = document.querySelectorAll(".img");
const classes = [];

function toggleClass(e) {
  for (const img of imgs) {
    if (e.target !== img) {
      img.classList.remove("active");
    } else {
      const classList = [...img.classList];
      if (!classList.includes("active")) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    }
  }
}

for (const img of imgs) {
  img.addEventListener("click", toggleClass);
}
