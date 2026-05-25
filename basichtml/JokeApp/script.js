async function GetNewJoke() {

  const API_URL =
    "https://v2.jokeapi.dev/joke/Programming,Miscellaneous";

  try {

    const response = await fetch(API_URL);

    const data = await response.json();

    document.getElementById("setup").innerText =
      data.joke || data.setup;

    document.getElementById("delivery").innerText =
      data.delivery || "";

  } catch (error) {

    document.getElementById("setup").innerText =
      "Failed to load joke 😢";

    document.getElementById("delivery").innerText = "";

  }
}

/* Page load hote hi first joke */
GetNewJoke();