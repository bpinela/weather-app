import type { Ref } from 'react'
import type { ApiError } from '@/types/weather'

export type SidebarProps = {
  searchInputRef: Ref<HTMLInputElement> | undefined
  handleKeyPress: (e: React.KeyboardEvent) => Promise<void>
  loading: boolean
  error: ApiError | null
}
