import WeatherDropdown from "../components/FormElements/WeatherDropdown";
import StaticText from "../components/UIElements/staticText";
import Title from "../components/UIElements/Title";
import { useWeatherContext } from "../context/weatherContext";




const About = () => {
    const { weatherData, currentLocation, handleUpdateWeather } =
    useWeatherContext()


    return <>
    <Title title={'Om oss'}/>
    <StaticText text="lorem ipsum"/>
    <WeatherDropdown
        weatherData={weatherData}
        currentLocation={currentLocation}
        handleUpdateWeather={handleUpdateWeather}
      />
    </>
}

export default About;