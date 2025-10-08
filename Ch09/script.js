const inputFields = document.querySelectorAll(".input-field");
// const inputlabels = document.querySelectorAll(".input-label");

function handleClick(e) {
  // console.log(e.target);
  const letters = [
    ...e.target.parentElement.querySelector(".input-label").children
  ];
  // console.log(letters);
let currentIndex = 0;
  const intervalID = setInterval(()=>{
    const currentLetter = letters[currentIndex]
    currentLetter.style.color = 'red';
    currentLetter.style.top = '-1rem';
    currentIndex++;
    if(currentIndex>= letters.length) clearInterval(intervalID);
}, 2000)
}

for (const inputField of inputFields) {
  inputField.addEventListener("click", handleClick);
}
