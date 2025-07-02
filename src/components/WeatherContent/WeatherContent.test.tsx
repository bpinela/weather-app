import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { within } from '@testing-library/react'
import { WeatherContent } from '@/components/WeatherContent'

vi.mock('@/lib/weather.icon', () => ({
  getWeatherIconClass: () => 'wi-day-sunny',
}))

describe('WeatherContent', () => {
  const mockWeatherData = {
    city: 'São Paulo',
    temperature: 26.7,
    weather: [
      {
        id: 800,
        icon: '01d',
        main: 'Clear',
        description: 'clear sky',
      },
    ],
    forecast: [
      {
        weekday: 'Mon',
        temp: { min: 18.2, max: 27.9 },
        weather: [
          {
            id: 801,
            icon: '02d',
            main: 'Clouds',
            description: 'few clouds',
          },
        ],
      },
      {
        weekday: 'Tue',
        temp: { min: 19.1, max: 28.4 },
        weather: [
          {
            id: 802,
            icon: '03d',
            main: 'Clouds',
            description: 'scattered clouds',
          },
        ],
      },
      {
        weekday: 'Wed',
        temp: { min: 20.1, max: 29.4 },
        weather: [
          {
            id: 803,
            icon: '04d',
            main: 'Clouds',
            description: 'broken clouds',
          },
        ],
      },
      {
        weekday: 'Thu',
        temp: { min: 17.5, max: 26.3 },
        weather: [
          {
            id: 804,
            icon: '04n',
            main: 'Clouds',
            description: 'overcast clouds',
          },
        ],
      },
      {
        weekday: 'Fri',
        temp: { min: 16.9, max: 25.1 },
        weather: [
          {
            id: 805,
            icon: '04n',
            main: 'Clouds',
            description: 'very cloudy',
          },
        ],
      },
    ],
  }

  it('renders skeleton when loading', () => {
    render(<WeatherContent weatherData={null} loading={true} />)

    expect(screen.getAllByTestId('skeleton-card').length).toBe(5)
  })

  it('renders weather info when data is present', () => {
    render(<WeatherContent weatherData={mockWeatherData} loading={false} />)

    expect(screen.getByText('Weather')).toBeInTheDocument()
    expect(screen.getByText('São Paulo')).toBeInTheDocument()
    expect(screen.getByText('27°')).toBeInTheDocument()
    expect(screen.getByText('5-Day Forecast')).toBeInTheDocument()

    const forecastCards = screen.getAllByTestId('forecast-card')
    expect(forecastCards.length).toBe(5)

    mockWeatherData.forecast.forEach((forecast, index) => {
      const card = forecastCards[index]
      const utils = within(card)

      expect(utils.getByText(forecast.weekday)).toBeInTheDocument()
      expect(
        utils.getByText(`${Math.round(forecast.temp.min)}°`)
      ).toBeInTheDocument()
      expect(
        utils.getByText(`${Math.round(forecast.temp.max)}°`)
      ).toBeInTheDocument()
    })
  })

  it('renders empty state when no data and not loading', () => {
    render(<WeatherContent weatherData={null} loading={false} />)

    expect(screen.getByText(/No weather data available/i)).toBeInTheDocument()
  })

  it('renders the disclaimer always', () => {
    render(<WeatherContent weatherData={null} loading={false} />)

    expect(
      screen.getByText(
        /Users are advised to consult official government sources/i
      )
    ).toBeInTheDocument()
  })
})
