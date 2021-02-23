function style(weather) {
  const container = document.querySelector(".display-weather");
  container.className = "display-weather";
  container.classList.add(weather);
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export { style, capitaliseFirstLetter };
