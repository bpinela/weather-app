export type WeatherData = {
  city: string
  temperature: string
  weather: WeatherCondition[]
  forecast: ForecastDay[]
}

export type WeatherCondition = {
  id: number
  main: string
  description: string
  icon: string
}

export type ForecastDay = {
  temp: {
    min: number
    max: number
  }
  weather: WeatherCondition[]
  weekday: string
}

export type ApiError = {
  message: string
  code?: string
}
