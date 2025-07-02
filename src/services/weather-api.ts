import type { Forecast } from '../types/openweathermap'
import type { WeatherData, ApiError } from '../types/weather'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  if (!API_KEY) {
    throw new Error(
      'API key not defined. Please set VITE_OPENWEATHER_API_KEY environment variable.'
    )
  }

  const baseUrl = 'https://api.openweathermap.org/data/2.5'
  const units = 'metric'

  try {
    const res = await fetch(
      `${baseUrl}/weather?q=${city}&appid=${API_KEY}&units=${units}`
    )

    if (!res.ok) {
      const errorData = await res.json()
      throw {
        message:
          errorData.message || `Failed to fetch current weather for ${city}`,
        code: errorData.cod,
      } as ApiError
    }

    const currentWeatherData = await res.json()

    const forecastResponse = await fetch(
      `${baseUrl}/forecast?q=${city}&appid=${API_KEY}&units=${units}`
    )

    if (!forecastResponse.ok) {
      const errorData = await forecastResponse.json()
      throw {
        message: errorData.message || `Failed to fetch forecast for ${city}`,
        code: errorData.cod,
      } as ApiError
    }

    const forecastData = await forecastResponse.json()

    const dailyForecasts = forecastData.list
      .filter((item: Forecast) => item.dt_txt.includes('09:00'))
      .map((item: Forecast) => {
        const date = new Date(item.dt_txt)
        const day = date.toLocaleDateString('en-US', { weekday: 'long' })

        return {
          temp: {
            min: item.main.temp_min,
            max: item.main.temp_max,
          },
          weather: item.weather,
          weekday: day,
        }
      })
      .slice(0, 5)

    const weatherData: WeatherData = {
      city: currentWeatherData.name,
      temperature: currentWeatherData.main.temp,
      weather: currentWeatherData.weather,
      forecast: dailyForecasts,
    }
    return weatherData
  } catch (error: unknown) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}
