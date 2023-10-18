import PropTypes from "prop-types";

function BackgroundImage({ weatherData }) {
	if (weatherData && weatherData.main && weatherData.main.temp > 16) {
		return (
			<>
				<h2>it is sunny</h2>
				<img src="src/images/rain.avif" alt="rain background" />
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
