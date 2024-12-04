interface MetricCardProps {
  title: string
  value: string | number
}

export function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  )
}
