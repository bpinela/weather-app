import { useSearch } from '@/hooks/useSearch'
import { useWeatherData } from '@/hooks/useWeatherData'
import { WeatherContent } from '@/components/WeatherContent'
import { Sidebar } from '@/components/Sidebar'

export default function App() {
  const { weatherData, loading, error, searchWeather } = useWeatherData('Miami')
  const { searchInputRef, handleKeyPress } = useSearch({
    onSearch: searchWeather,
    disabled: loading,
  })

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
