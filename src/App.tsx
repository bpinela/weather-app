import { useRef } from 'react'
import type React from 'react'
import { useWeatherData } from '@/hooks/useWeatherData'
import { WeatherContent } from '@/components/WeatherContent'
import { Sidebar } from '@/components/Sidebar'

export default function App() {
  const searchInputRef = useRef<HTMLInputElement>(null)
  const { weatherData, loading, error, searchWeather } = useWeatherData('Miami')

  const handleKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const city = searchInputRef.current?.value.trim()
      if (city) {
        await searchWeather(city)
        if (searchInputRef.current) {
          searchInputRef.current.value = ''
        }
      }
    }
  }

  return (
    <div className="flex h-screen w-screen">
      <Sidebar
        searchInputRef={searchInputRef}
        handleKeyPress={handleKeyPress}
        loading={loading}
        error={error}
      />

      <WeatherContent weatherData={weatherData} loading={loading} />
    </div>
  )
}
