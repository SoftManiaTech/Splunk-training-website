import { DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TotalCost() {
  // In a real implementation, this would fetch data from Splunk
  const totalCost = 1284.56

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Cost (This Month)</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${totalCost.toFixed(2)}</div>
        <p className="text-xs text-muted-foreground">+12.5% from last month</p>
      </CardContent>
    </Card>
  )
}

