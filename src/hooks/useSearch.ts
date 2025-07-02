import { useRef } from 'react'
import type React from 'react'

type UseSearchProps = {
  onSearch: (query: string) => Promise<void> | void
  disabled?: boolean
}

export const useSearch = ({ onSearch, disabled = false }: UseSearchProps) => {
  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleKeyPress = async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !disabled) {
      const query = searchInputRef.current?.value.trim()

      if (query) {
        await onSearch(query)
        clearInput()
      }
    }
  }

  const clearInput = () => {
    if (searchInputRef.current) {
      searchInputRef.current.value = ''
    }
  }

  const search = async (query: string) => {
    if (query.trim() && !disabled) {
      await onSearch(query.trim())
      clearInput()
    }
  }

  return {
    searchInputRef,
    handleKeyPress,
    clearInput,
    search,
  }
}
