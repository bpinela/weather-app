'use client'

import { useState, useEffect } from 'react'
import { fetchWeatherData } from '../services/weather-api'
import type { WeatherData, ApiError } from '../types/weather'

type UseWeatherData = {
  weatherData: WeatherData | null
  loading: boolean
  error: ApiError | null
  searchWeather: (city: string) => Promise<void>
}

export const useWeatherData = (defaultCity = 'Miami'): UseWeatherData => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ApiError | null>(null)

  const searchWeather = async (city: string) => {
    if (!city.trim()) return

    setLoading(true)
    setError(null)

    try {
      const data = await fetchWeatherData(city)
      setWeatherData(data)
    } catch (err) {
      setError(err as ApiError)
      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  // Load default city on mount
  useEffect(() => {
    searchWeather(defaultCity)
  }, [defaultCity])

  return {
    weatherData,
    loading,
    error,
    searchWeather,
  }
}
