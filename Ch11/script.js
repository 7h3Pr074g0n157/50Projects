const cta = document.getElementById("cta");

function displayNewJoke(joke) {
  const output = document.getElementById("output");
  output.textContent = joke;
}

async function fetchAPI() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      const data = await response.json();
      const joke = await data.joke;
      displayNewJoke(joke);
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener("DOMContentLoaded", fetchAPI);
cta.addEventListener("click", fetchAPI);
