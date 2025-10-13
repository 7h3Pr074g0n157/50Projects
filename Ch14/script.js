const choiceInput = document.getElementById("choice-input");
const choiceList = document.getElementById("choice-output");
let choices = [];

function createChoiceBadge(textContent, choiceCount) {
  const li = document.createElement("li");
  li.textContent = textContent;
  li.id = "choice-" + choiceCount;
  li.classList = "choice";
  return li;
}

function outputNewChoice() {}

function handleChoiceInput(e) {
  // for (const entry of choiceList) {
  //   entry.remove();
  // }
  let input = "";
  input += e.target.value;
  choices = input.split(",");

  choices.forEach((choice, i) => {
    if (choice) {
      const newChoice = createChoiceBadge(choice, i);
      choiceList.appendChild(newChoice);
    }
  });
}

choiceInput.addEventListener("input", handleChoiceInput);
