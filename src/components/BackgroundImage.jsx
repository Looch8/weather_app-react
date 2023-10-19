import PropTypes from "prop-types";

const rain = {
	imageUrl: "src/images/rain.avif",
};

function BackgroundImage({ weatherData }) {
	console.log(weatherData);
	if (weatherData && weatherData.main && weatherData.main.temp > 16) {
		return (
			<>
				<h2>it is sunny</h2>
				<img
					className="weather"
					src={rain.imageUrl}
					alt="rain background"
				/>
			</>
		);
	} else {
		return null;
	}
}

BackgroundImage.propTypes = {
	weatherData: PropTypes.object,
};

export default BackgroundImage;
