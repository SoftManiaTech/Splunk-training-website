import { Server } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ServerStatistics() {
  // In a real implementation, this would fetch data from Splunk
  const stats = {
    created: 24,
    running: 18,
    stopped: 6,
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Server Statistics</CardTitle>
        <Server className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{stats.running}</div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{stats.created} Created</span>
          <span>{stats.running} Running</span>
          <span>{stats.stopped} Stopped</span>
        </div>
      </CardContent>
    </Card>
  )
}

