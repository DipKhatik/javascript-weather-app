export function renderWeather(data) {
  document.getElementById("cityName").innerText = data.name;
  document.getElementById("temperature").innerText = `🌡️ ${data.main.temp}°C`;
  document.getElementById("condition").innerText = data.weather[0].description;
  document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").innerText = `💨 Wind: ${data.wind.speed} m/s`;
  document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  document.getElementById("weatherCard").classList.remove("hidden");
}
