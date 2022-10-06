import { useState } from 'react'
import { Place, WeatherData } from '../types'

export default function useWeather(initialData?: WeatherData[]) {
  const [weatherData, setWeatherData] = useState(initialData)
  const [weather, setWeather] = useState<WeatherData | undefined>(undefined)
  const currentLocation = weather?.place?.toLowerCase() as Place

  const handleUpdateWeather = (place: Place) => {
    if (!weatherData) return
    console.log(place)
    const updatedWeather = weatherData.find(
      (data) => data.place.toLowerCase() == place.toLowerCase()
    )

    if (updatedWeather) {
      setWeather(updatedWeather)
    }
  }
  return {
    handleUpdateWeather,
    weather,
    weatherData,
    setWeather,
    setWeatherData,
    currentLocation,
  }
}

