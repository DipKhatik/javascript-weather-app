import { API_KEY, BASE_URL } from "./config.js";

export async function getWeather(city) {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return await response.json();
}
