const eventBox = document.getElementById("eventBox");
const starterBox = document.getElementById("starterBox");

window.addEventListener("keydown", (e) => {
  const key = document.querySelector("#event-key div.display");
  const keyCode = document.querySelector("#event-key-code div.display");
  const code = document.querySelector("#event-code div.display");

  key.textContent = e.key;
  keyCode.textContent = e.keyCode;
  code.textContent = e.code;
  eventBox.classList.remove("hidden");
  starterBox.classList.add("hidden");
});

window.addEventListener("keyup", () => {
  eventBox.classList.add("hidden");
  starterBox.classList.remove("hidden");
});
