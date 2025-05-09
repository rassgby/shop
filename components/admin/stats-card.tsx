import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: LucideIcon
  trend?: "up" | "down" | "neutral"
  trendValue?: string
}

export function StatsCard({ title, value, description, icon: Icon, trend, trendValue }: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="p-2 bg-amber-100 rounded-lg text-amber-800">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold">{value}</p>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      {trend && trendValue && (
        <div className="mt-4 flex items-center">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
              trend === "up"
                ? "bg-green-100 text-green-800"
                : trend === "down"
                  ? "bg-red-100 text-red-800"
                  : "bg-gray-100 text-gray-800"
            }`}
          >
            {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
          </span>
          <span className="ml-2 text-xs text-gray-500">vs mois précédent</span>
        </div>
      )}
    </div>
  )
}
