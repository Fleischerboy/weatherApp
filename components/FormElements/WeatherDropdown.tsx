import { WeatherContext } from '../../context/weatherContext'
import { Place } from '../../types'

type WeatherDropdownProp = Pick<
  WeatherContext,
  'currentLocation' | 'handleUpdateWeather' | 'weatherData'
>

export const WeatherDropdown = ({
  weatherData,
  handleUpdateWeather,
  currentLocation,
}: WeatherDropdownProp) => {
  if (!weatherData) return null

  return (
    <select
      className="weather"
      data-test-id="weather-dropdown"
      value={currentLocation ?? ''}
      onChange={(event) => handleUpdateWeather(event.target.value as Place)}
    >
      <option value="" disabled>
        Velg Sted
      </option>
      {weatherData.map((data) => (
        <option key={data.id} value={data.place.toLowerCase()}>
          {data.place}
        </option>
      ))}
    </select>
  )
}

export default WeatherDropdown
