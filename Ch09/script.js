const inputFields = document.querySelectorAll(".input-field");

function getActiveLable(e) {
  const target = e.target;
  const activeLable = target.parentElement.querySelector(".input-label");
  const children = [...activeLable.children];
  return children;
}

function handleFocus(e) {
  e.stopPropagation();
  console.log(e.target.tagName);
  const letters = getActiveLable(e);

  let currentIndex = 0;
  const intervalID = setInterval(() => {
    const currentLetter = letters[currentIndex];
    classesOfCurrentLetter = [...currentLetter.classList];

    if (!classesOfCurrentLetter.includes("translate")) {
      currentLetter.classList.add("translate");
      currentLetter.classList.remove("initial");
    } else {
      currentLetter.classList.add("initial");
      currentLetter.classList.remove("translate");
    }

    currentIndex++;
    if (currentIndex >= letters.length) clearInterval(intervalID);
  }, 100);
}

function handleReset(e) {
  if (e.target.tagName !== "INPUT") {
    console.log(e.target.tagName);
    e.stopImmediatePropagation();
    const letters = getActiveLable(e);
    let currentIndex = 0;
    const intervalID = setInterval(() => {
      const currentLetter = letters[currentIndex];
      classesOfCurrentLetter = [...currentLetter.classList];

      if (classesOfCurrentLetter.includes("translate")) {
        currentLetter.classList.add("initial");
        currentLetter.classList.remove("translate");
      }

      currentIndex++;
      if (currentIndex >= letters.length) clearInterval(intervalID);
    }, 100);
  } else {
    return;
  }
}

for (const inputField of inputFields) {
  inputField.addEventListener("focus", handleFocus);
  inputField.addEventListener("blur", handleFocus);
}
window.addEventListener("click", handleReset);
