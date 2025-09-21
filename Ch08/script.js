const sections = [...document.querySelectorAll(".section")];

for (const section of sections) {
  // console.log(section);
  section.addEventListener("click", (e) => {
    const target = e.target.parentElement;
    // console.log(target.id, target);

    const targetID = target.id;

    sections.forEach((section) => {
      if (section.id !== targetID) {
        section.style.width = "25%";
      }
    });

    target.style.width = target.style.width === "50%" ? "75%" : "50%";
  });
}
