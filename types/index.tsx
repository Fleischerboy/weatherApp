export type Place = 'Sarpsborg' | 'Fredrikstad' | 'Halden' | 'Moss' | 'Oslo'
export type Weather = 'Sol' | 'Regn' | 'Snø' | 'Overskyet'
export type WeatherData = {
    id: String,
    place: Place,
    weather: Weather,
    temperature: number
}