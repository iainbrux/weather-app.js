import { style, capitaliseFirstLetter } from "./style";

async function getWeather(input) {
  const kelvin = -273.15;
  const day = document.querySelector(".day");
  const weather = document.querySelector(".weather");
  const temperature = document.querySelector(".temperature");
  const header = document.querySelector('header');
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();

  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input},uk&APPID=62d9f7279fdb0e1b7b37a6dfead3cd52`,
    { mode: "cors" }
  );

  let currentWeather = await response.json();

  input = capitaliseFirstLetter(input);

  header.innerText = `${input}`;
  day.innerText = `It's ${weekDays[today.getDay()]} today`;
  weather.innerText = `The current forecast is ${currentWeather.weather[0].main.toLowerCase()}`;
  temperature.innerText = `${(currentWeather.main.temp + kelvin).toFixed(1)}°C`;

  style(currentWeather.weather[0].main.toLowerCase());

}

export { getWeather };
