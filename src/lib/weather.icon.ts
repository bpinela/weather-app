export const getWeatherIconClass = (id: number, iconCode: string): string => {
  if (id === 800) {
    return iconCode.includes('d') ? 'wi-day-sunny' : 'wi-night-clear'
  }

  if (id >= 200 && id < 300) return 'wi-thunderstorm'
  if (id >= 300 && id < 400) return 'wi-sprinkle'
  if (id >= 500 && id < 600) return 'wi-rain'
  if (id >= 600 && id < 700) return 'wi-snow'
  if (id >= 700 && id < 800) return 'wi-fog'
  if (id > 800) return 'wi-cloudy'

  return 'wi-na'
}
