import { Card } from '@/components/ui/card'

export const WeatherSkeleton = () => {
  return (
    <>
      <div className="text-center mb-8 md:mb-12">
        <div className="mb-6">
          <div
            className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-white/20 rounded-full animate-pulse"
            data-testid="main-icon-skeleton"
          />
        </div>
        <div className="space-y-4">
          <div className="h-12 md:h-16 lg:h-20 bg-white/20 rounded-lg mx-auto w-64 animate-pulse" />
          <div className="h-16 md:h-20 lg:h-24 bg-white/20 rounded-lg mx-auto w-32 animate-pulse" />
        </div>
      </div>

      <div>
        <div className="h-8 bg-white/20 rounded-lg w-48 mb-6 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card
              key={index}
              data-testid="skeleton-card"
              className="bg-white/20 backdrop-blur-sm border-0 p-8"
            >
              <div className="space-y-3">
                <div className="h-4 bg-white/30 rounded w-16 mx-auto animate-pulse" />
                <div className="w-8 h-8 md:w-10 md:h-10 mx-auto bg-white/30 rounded-full animate-pulse" />
                <div className="flex justify-between">
                  <div className="h-3 bg-white/30 rounded w-4 animate-pulse" />
                  <div className="h-3 bg-white/30 rounded w-4 animate-pulse" />
                </div>
                <div className="flex justify-between">
                  <div className="h-5 bg-white/30 rounded w-8 animate-pulse" />
                  <div className="h-5 bg-white/30 rounded w-8 animate-pulse" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
