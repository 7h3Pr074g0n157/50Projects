const navList = document.querySelector(".nav-list");
navList.lastElementChild.addEventListener("click", () => {
  for (const navItem of navList.children) {
    // const navLink = navItem.children[0];
    navItem.classList.toggle("rotate");
    navList.classList.toggle('shrink')
  }
});
