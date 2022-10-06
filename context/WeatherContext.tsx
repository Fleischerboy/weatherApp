import React, { createContext } from 'react'
import { data } from '../data'
import useWeather from '../hooks/useWeather'
import { Place, WeatherData as weatherDataType } from '../types'

export type WeatherContext = {
  weather?: weatherDataType
  weatherData?: weatherDataType[]
  handleUpdateWeather: (place: Place) => void
  currentLocation?: Place
  setWeatherData: React.Dispatch<
    React.SetStateAction<weatherDataType[] | undefined>
  >
}

const WeatherContext = createContext<WeatherContext | undefined>(undefined)

const WeatherData = ({ data }: { data?: weatherDataType | null }) => {
  if (!data) return null

  return (
    <aside data-testid="weather-data">
      <span>{data.place}</span> | <span>{data.weather}</span> |{' '}
      <span>{data.temperature}</span>
    </aside>
  )
}

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    handleUpdateWeather,
    weather,
    weatherData,
    setWeatherData,
    currentLocation,
  } = useWeather(data)

  return (
    <WeatherContext.Provider
      value={{
        handleUpdateWeather,
        weather,
        weatherData,
        setWeatherData,
        currentLocation,
      }}
    >
      {children}
      <WeatherData data={weather}/>
    </WeatherContext.Provider>
  )
}

const useWeatherContext = () => {
  const context = React.useContext(WeatherContext)
  if (!context) throw new Error('WeatherContext myst have a WeatherProvider')
  return context
}

export { useWeatherContext, WeatherProvider }
