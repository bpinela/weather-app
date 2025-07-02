import { getWeatherIconClass } from '@/lib/weather.icon'
import { WeatherSkeleton } from '../Skeleton'
import { Card } from '../ui/card'
import type { WeatherContentProps } from './WeatherContent.types'

export const WeatherContent = ({
  weatherData,
  loading,
}: WeatherContentProps) => {
  return (
    <div className="w-full flex-1 bg-gradient-to-b from-[#007CF0] via-[#3d719d] to-[#40c5ea] p-6 md:p-8 lg:p-4 text-white relative overflow-hidden flex flex-col">
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">Weather</h2>

        {loading ? (
          <WeatherSkeleton />
        ) : weatherData ? (
          <>
            <div className="text-center mb-8 md:mb-8">
              <div className="mb-8">
                <i
                  className={`wi ${getWeatherIconClass(weatherData.weather[0].id, weatherData.weather[0].icon)} text-9xl`}
                />
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                {weatherData.city}
              </h3>
              <div className="text-6xl md:text-7xl lg:text-6xl">
                {Math.round(weatherData.temperature)}°
              </div>
            </div>

            {weatherData.forecast && (
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-4">
                  5-Day Forecast
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
                  {weatherData.forecast.slice(0, 5).map((forecast, index) => (
                    <Card
                      key={index}
                      data-testid="forecast-card"
                      className="bg-white/20 backdrop-blur-sm border-0 p-4 text-center space-y-3"
                    >
                      <div className="text-sm md:text-2xl font-medium text-white/90">
                        {forecast.weekday}
                      </div>
                      <div>
                        <i
                          className={`wi ${getWeatherIconClass(forecast.weather[0].id, forecast.weather[0].icon)} text-8xl text-white`}
                        />
                      </div>
                      <div className="w-3/4 mx-auto grid grid-cols-2 text-center gap-1">
                        <div>
                          <div className="text-white/80 text-3xl">L</div>
                          <div className="text-white text-3xl font-medium">
                            {Math.round(forecast.temp.min)}°
                          </div>
                        </div>
                        <div>
                          <div className="text-white/80 text-3xl">H</div>
                          <div className="text-white text-3xl font-medium">
                            {Math.round(forecast.temp.max)}°
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl">No weather data available</p>
          </div>
        )}
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-xs text-black leading-relaxed z-10">
        <p className="mb-2">
          Users are advised to consult official government sources and exercise
          their own judgment when making decisions based on weather conditions.
          The App and its developers are not liable for any direct, indirect,
          incidental, or consequential damages or losses arising from the use of
          or reliance on information provided by the App.
        </p>
        <p>
          By using this App, you agree to assume full responsibility for any
          decisions or actions taken based on its content.
        </p>
      </div>
    </div>
  )
}
