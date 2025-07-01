'use client'

import { useWeatherData } from './hooks/useWeatherData'

export default function App() {
  const { weatherData } = useWeatherData('Chicago')

  console.log(weatherData)

  return <div className="flex h-screen w-screen"></div>
}
