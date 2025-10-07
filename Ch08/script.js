const sections = [...document.querySelectorAll(".section")];

function changeSectionWidth(sections, target) {
  const targetID = target.id;
  sections.forEach((section) => {
    if (section.id === targetID) {
      if (section.classList.contains("w75")) {
        section.classList.add("w50");
        return;
      }
      section.classList.add("w75");
      section.classList.remove("w25");
    } else {
      section.classList.add("w25");
      section.classList.remove("w75");
    }
  });
}

for (const section of sections) {
  // console.log(section);
  section.addEventListener("click", (e) => {
    const target = e.target.parentElement;
    console.log(target, target.id);

    changeSectionWidth(sections, target);
  });
}
