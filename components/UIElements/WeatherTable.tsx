import { WeatherContext } from '../../context/weatherContext'

type WeatherDropdownProp = Pick<
  WeatherContext,
  'currentLocation' | 'handleUpdateWeather' | 'weatherData'
>

const WeatherTable = ({
  currentLocation,
  weatherData,
  handleUpdateWeather,
}: WeatherDropdownProp) => {
  if(!weatherData) return null;
  return (
    <section className="weather-table" data-testid="weather-table">
      <h2>Oversikt</h2>
      <ul>
        {weatherData.map((data) => (
          <li key={data.id}>
            <div>
              <span>{data.place}</span>
              <span>{data.weather}</span>
              <span>{data.temperature}</span>
            </div>
            {currentLocation == data.place.toLowerCase() ? null : (
              <button
                onClick={() => handleUpdateWeather(data.place)}
                type="button"
              >
                Velg sted
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default WeatherTable
