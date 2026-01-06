import { getWeather } from "./api.js";
import { renderWeather } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("cityInput");
const errorEl = document.getElementById("error");
const loading = document.getElementById("loading");

searchBtn.addEventListener("click", async () => {
  const city = input.value.trim();
  if (!city) return;

  errorEl.innerText = "";
  loading.classList.remove("hidden");

  try {
    const data = await getWeather(city);
    renderWeather(data);
  } catch (err) {
    errorEl.innerText = err.message;
  } finally {
    loading.classList.add("hidden");
  }
});
