const button = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");

button.addEventListener("click", async () => {
  const city = input.value;
  const apiKey = "783e851da4cfd3a976dfdd1b7e1a327c";
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 ${data.main.temp} °C</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

<p>${data.weather[0].description}</p>
      <p>💨 Wind: ${data.wind.speed} km/h</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML =
      "Error fetching weather.";
  }
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});