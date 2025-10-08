function handleClick(e) {
  if (e.target.nodeName === "I") {
    const clickedBox = e.currentTarget;
    const answer = clickedBox.querySelector(`p`);

    e.target.classList.value === "fa-angle-down fa-solid"
      ? (e.target.classList = "fa-solid fa-circle-xmark")
      : (e.target.classList = "fa-angle-down fa-solid");
    answer.classList.toggle("hidden");
    clickedBox.classList.toggle("unfolded");
  }
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => box.addEventListener("click", handleClick));
