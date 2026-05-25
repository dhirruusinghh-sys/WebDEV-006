const API_KEY = "76de570dd7cc14d49c6b8a052cc0f225";

async function getWeather() {

  const cityName = document.getElementById("cityName").value.trim();

  if (cityName === "") {
    alert("Please enter city name");
    return;
  }

  document.getElementById("loading").style.display = "block";

  try {

    const { Lattitude, Longitude } = await getGeoLocation(cityName);

    const WEATHER_API =
      `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}&units=metric`;

    const response = await fetch(WEATHER_API);

    const data = await response.json();

    console.log(data);

    document.getElementById("Temperature").innerText =
      Math.round(data.main.temp);

    document.getElementById("city").innerText =
      data.name;

    document.getElementById("weatherType").innerText =
      data.weather[0].description;

    document.getElementById("humidity").innerText =
      data.main.humidity + "%";

    document.getElementById("wind").innerText =
      data.wind.speed + " km/h";

    document.getElementById("feelsLike").innerText =
      Math.round(data.main.feels_like) + "°C";

    const icon = data.weather[0].icon;

    document.getElementById("weatherIcon").src =
      `https://openweathermap.org/img/wn/${icon}@4x.png`;

    updateDateTime();

  } catch (error) {

    alert("City not found!");

    console.log(error);

  }

  document.getElementById("loading").style.display = "none";
}

async function getGeoLocation(city) {

  const GEO_LOC_API =
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);

  const data = await response.json();

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}

function updateDateTime() {

  const now = new Date();

  const options = {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    day: "numeric",
    month: "long",
  };

  document.getElementById("dateTime").innerText =
    now.toLocaleDateString("en-IN", options);
}



document.getElementById("cityName").addEventListener("keypress", function(e) {

  if (e.key === "Enter") {
    getWeather();
  }

});



window.onload = () => {

  document.getElementById("cityName").value = "Bhopal";

  getWeather();

};