const button = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");

button.addEventListener("click", async () => {
  const city = input.value;
  const apiKey = "783e851da4cfd3a976dfdd1b7e1a327c";
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    // 👉 show loading
    document.getElementById("loading").classList.remove("hidden");

    const response = await fetch(url);
    const data = await response.json();

    // 👉 hide loading
    document.getElementById("loading").classList.add("hidden");

    document.getElementById("weatherResult").innerHTML = `
      <div class="card">
        <h2>${data.name}</h2>

        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

        <h3>${data.main.temp}°C</h3>

        <p>${data.weather[0].description}</p>

        <p>Feels like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} km/h</p>
      </div>
    `;

  } catch (error) {

    document.getElementById("loading").classList.add("hidden");

    document.getElementById("weatherResult").innerHTML =
      "Something went wrong ❌";

  }

});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});