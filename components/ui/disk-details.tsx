import { HardDrive } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface DiskDetailsProps {
  detailed?: boolean
}

export function DiskDetails({ detailed = false }: DiskDetailsProps) {
  // In a real implementation, this would fetch data from Splunk
  const diskData = {
    totalSize: 2048,
    usedSize: 1280,
    percentage: 62.5,
  }

  const detailedData = [
    { id: "vol-1", size: "500 GB", type: "gp2", attached: "i-1234abcd", usage: 78 },
    { id: "vol-2", size: "250 GB", type: "io1", attached: "i-5678efgh", usage: 45 },
    { id: "vol-3", size: "1 TB", type: "st1", attached: "i-9012ijkl", usage: 62 },
    { id: "vol-4", size: "100 GB", type: "gp3", attached: "-", usage: 0 },
  ]

  if (!detailed) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">EBS Storage</CardTitle>
          <HardDrive className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{diskData.usedSize} GB</div>
          <Progress value={diskData.percentage} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            {diskData.percentage}% of {diskData.totalSize} GB allocated
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Volume ID</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Usage</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {detailedData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.size}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={item.usage} className="h-2 w-16" />
                <span className="text-xs">{item.usage}%</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

