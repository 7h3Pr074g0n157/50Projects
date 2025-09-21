const sounds = document.querySelectorAll(".button");

for (const sound of [...sounds]) {
  sound.addEventListener("click", (e) => {
    const isPlaying = e.target.firstElementChild.getAttribute("data-play");
    
    if (isPlaying) {
      e.target.firstElementChild.removeAttribute("data-play");
      e.target.firstElementChild.pause();
    } else {
      e.target.firstElementChild.setAttribute("data-play", "true");
      e.target.firstElementChild.play();
    }
  });
}
