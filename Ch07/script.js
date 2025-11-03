const container = document.getElementById("container");
const boxes = document.getElementsByClassName("box");

function buildNewBox() {
  const boxNumber = container.children.length + 1;
  const div = document.createElement("div");
  div.id = "box-" + boxNumber;
  div.classList.add("box");
  div.classList.add("flyIn");
  div.classList.add("box-" + boxNumber);
  div.textContent = "Content " + boxNumber;
  return div;
}

function addBox() {
  const newBox = buildNewBox();
  container.appendChild(newBox);
}

function removeBox(lastBox) {
  lastBox.classList.remove("flyIn");
  lastBox.classList.add("flyOut");
  window.setTimeout(() => {
    container.removeChild(lastBox);
  }, 300);
}

function scrollHandler() {
  const lastBox = container.lastElementChild;
  const rect = lastBox.getBoundingClientRect();

  const rectHeight = rect.height;
  const rectBottom = rect.bottom;
  const marginBottom = 1.25;

  const browserBottom = window.innerHeight;
  const browserBottomToRectBottom = browserBottom - rectBottom;

  if (browserBottomToRectBottom > rectHeight * marginBottom) addBox();
  if (rectBottom > browserBottom) removeBox(lastBox);
}

window.addEventListener("scroll", scrollHandler);
