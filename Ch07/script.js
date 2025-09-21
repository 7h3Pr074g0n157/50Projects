const container = document.getElementById("container");
const boxes = document.getElementsByClassName("box");
let rectBottom;

function buildNewBox() {
  // console.log(container.children.length);
  const boxNumber = container.children.length + 1;
  const div = document.createElement("div");
  div.id = "box-" + boxNumber;
  div.classList.add("box");
  div.classList.add("box-" + boxNumber);
  div.textContent = "Content " + boxNumber;
  // console.log(div);
  container.appendChild(div);
}

// alert(rect.bottom);

window.addEventListener("scroll", () => {
  const lastBox = container.lastElementChild;
  const rect = lastBox.getBoundingClientRect();
  console.log(lastBox);
  console.log(window.innerHeight); // 1303px

  rectBottom = rect.bottom; //841px

  if (rectBottom <= window.innerHeight / 2) buildNewBox();
});
