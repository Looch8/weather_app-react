import { useState } from "react";
import "./App.css";

const APIkey = "501b5e84b31a1f50f3c9da475c5a10a8";

function GetWeather() {
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [weatherData, setWeatherData] = useState(null);

	const handleSearch = () => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city},${country},&appid=${APIkey}&units=metric`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => setWeatherData(data))
			.catch((error) =>
				console.log("Error fetching weather data:", error)
			);
	};

	return (
		<>
			<input
				type="text"
				placeholder="Enter City"
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Enter Country"
				value={country}
				onChange={(e) => setCountry(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
			{weatherData && (
				<div>
					<h2>Weather Data</h2>
					<p>City: {weatherData.name}</p>
					<p>Country: {weatherData.sys.country}</p>
					<p>Temperature: {weatherData.main.temp} C</p>
				</div>
			)}
		</>
	);
}

function App() {
	return (
		<>
			<h1>Weather App</h1>
			<GetWeather />
		</>
	);
}

export default App;
