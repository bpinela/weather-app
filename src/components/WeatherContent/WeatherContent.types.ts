import type { WeatherData } from '@/types/weather'

export type WeatherContentProps = {
  weatherData: WeatherData | null
  loading: boolean
}
