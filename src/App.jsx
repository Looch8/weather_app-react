import "./App.css";

function SearchBar() {
	return (
		<>
			<input type="text" placeholder="Enter City" />
		</>
	);
}

function App() {
	return (
		<>
			<h1>Weather App</h1>
			<SearchBar />
		</>
	);
}

export default App;
