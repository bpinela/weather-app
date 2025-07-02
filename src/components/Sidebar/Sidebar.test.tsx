import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from '@/components/Sidebar'
import type { SidebarProps } from './Sidebar.types'
import { vi } from 'vitest'

describe('Sidebar', () => {
  const mockRef = { current: null }
  const mockHandleKeyPress = vi.fn()
  const defaultProps: SidebarProps = {
    searchInputRef: mockRef,
    handleKeyPress: mockHandleKeyPress,
    loading: false,
    error: null,
  }

  it('renders search heading and input', () => {
    render(<Sidebar {...defaultProps} />)

    expect(screen.getByText(/Search/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Search by city/i)).toBeInTheDocument()
  })

  it('calls handleKeyPress on key press', async () => {
    render(<Sidebar {...defaultProps} />)

    const input = screen.getByPlaceholderText(/Search by city/i)
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(mockHandleKeyPress).toHaveBeenCalled()
  })

  it('disables input when loading', () => {
    render(<Sidebar {...defaultProps} loading={true} />)

    expect(screen.getByPlaceholderText(/Search by city/i)).toBeDisabled()
  })

  it('shows error when provided', () => {
    const error = { message: 'City not found' }
    render(<Sidebar {...defaultProps} error={error} />)

    expect(screen.getByText(/City not found/i)).toBeInTheDocument()
    const input = screen.getByPlaceholderText(/Search by city/i)
    expect(input).toHaveClass('border-red-700')
  })

  it('renders disclaimer at the bottom', () => {
    render(<Sidebar {...defaultProps} />)

    expect(
      screen.getByText(/The information provided by this weather application/i)
    ).toBeInTheDocument()
  })
})
