const displayWeather = document.querySelector('.display');

async function getWeather(input) {
	let city = input;
	let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=62d9f7279fdb0e1b7b37a6dfead3cd52`, {mode: 'cors'});
	let retrieved = await response.json();
	let lat = retrieved.coord.lat;
	let lon = retrieved.coord.lon;
	
	let weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=62d9f7279fdb0e1b7b37a6dfead3cd52`, {mode: 'cors'});
    let weatherRetrieved = await weatherResponse.json();
	console.log(weatherRetrieved) //could be written into its own function from weatherResponse
	 
}

getWeather('chorley')