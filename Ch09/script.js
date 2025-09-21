const inputFields = document.querySelectorAll(".input-field");
// const inputlabels = document.querySelectorAll(".input-label");

for (const inputField of inputFields) {
  console.log(inputField);
  inputField.addEventListener("click", (e) => {
    console.log(e.target);
    const fieldLabel = e.target.parentElement.querySelector(".input-label");
    console.log("label", fieldLabel);
    fieldLabel.style.color = "red";
    fieldLabel.style.top = "-10rem";
  });
}
