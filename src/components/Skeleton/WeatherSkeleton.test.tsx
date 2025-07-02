import { render, screen } from '@testing-library/react'
import { WeatherSkeleton } from '@/components/Skeleton'

describe('WeatherSkeleton', () => {
  it('renders correctly', () => {
    render(<WeatherSkeleton />)

    const mainIcon = screen.getByTestId('main-icon-skeleton')
    expect(mainIcon).toBeInTheDocument()

    const pulses = document.querySelectorAll('.animate-pulse')
    expect(pulses.length).toBeGreaterThanOrEqual(10)
  })

  it('renders 5 skeleton cards', () => {
    render(<WeatherSkeleton />)

    const skeletonCards = screen.getAllByTestId('skeleton-card')
    expect(skeletonCards.length).toBe(5)
  })

  it('each card has expected child skeletons', () => {
    render(<WeatherSkeleton />)

    const skeletonCards = screen.getAllByTestId('skeleton-card')

    skeletonCards.forEach((card) => {
      const circles = card.querySelectorAll('.rounded-full')
      const bars = card.querySelectorAll('.rounded')
      expect(circles.length).toBeGreaterThanOrEqual(1)
      expect(bars.length).toBeGreaterThanOrEqual(3)
    })
  })
})
