import type { NextPage } from 'next'
import WeatherDropdown from '../components/FormElements/WeatherDropdown'
import StaticText from '../components/UIElements/staticText'
import Title from '../components/UIElements/Title'
import WeatherTable from '../components/UIElements/WeatherTable'
import { useWeatherContext } from '../context/weatherContext'
import { data } from '../data'

const Home: NextPage = () => {
  const { weatherData, currentLocation, handleUpdateWeather } =
    useWeatherContext()

  return (
    <>
      <Title title={'Velkommen til oversikten over været'} />
      <StaticText text="lorem ipsum" />
      <WeatherDropdown
        weatherData={weatherData}
        currentLocation={currentLocation}
        handleUpdateWeather={handleUpdateWeather}
      />
      <WeatherTable
        currentLocation={currentLocation}
        handleUpdateWeather={handleUpdateWeather}
        weatherData={weatherData}
      />
    </>
  )
}

export default Home
