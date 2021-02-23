import { getWeather } from "./getWeather";

function renderButtons() {
  const submit = document.querySelector("#submit");
  const location = document.querySelector("#location");

  submit.addEventListener("click", () => getWeather(location.value));
}

export { renderButtons };
