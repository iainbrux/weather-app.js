const displayWeather = document.querySelector('.display');

async function getWeather(input) {
    let city = input;
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=62d9f7279fdb0e1b7b37a6dfead3cd52`, {mode: 'cors'});
	 let weather = await response.json();
	 console.log(weather)
}

getWeather('chorley')