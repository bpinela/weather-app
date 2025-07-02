import { Input } from '@/components/ui/input'
import type { SidebarProps } from './Sidebar.types'

export const Sidebar = ({
  searchInputRef,
  handleKeyPress,
  loading,
  error,
}: SidebarProps) => {
  return (
    <div className="w-full md:w-80 lg:w-72 bg-gray-50 p-4 flex flex-col">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Search</h2>
        <Input
          ref={searchInputRef}
          type="text"
          placeholder="Search by city"
          onKeyDown={handleKeyPress}
          disabled={loading}
          className={`w-full ${error && 'border border-red-700'}`}
        />

        {error && <p className="text-sm text-red-700 mt-2">{error.message}</p>}
      </div>

      <div className="mt-auto">
        <p className="text-xs text-black leading-relaxed">
          The information provided by this weather application is for general
          informational purposes only. All weather data, forecasts, and alerts
          are obtained from third-party sources and are provided as is without
          warranty of any kind, either express or implied. While we strive to
          provide accurate and timely information, we make no representations or
          warranties of any kind regarding the accuracy, completeness,
          reliability, or suitability of the weather data presented.
        </p>
      </div>
    </div>
  )
}
