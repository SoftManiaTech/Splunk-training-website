import { Network } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ElasticIpUsageProps {
  detailed?: boolean
}

export function ElasticIpUsage({ detailed = false }: ElasticIpUsageProps) {
  // In a real implementation, this would fetch data from Splunk
  const elasticIpData = {
    allocated: 12,
    used: 8,
    percentage: 66.7,
  }

  const detailedData = [
    { id: "eip-1", ip: "54.123.45.67", region: "us-east-1c", attached: "i-1234abcd", status: "In-use" },
    { id: "eip-2", ip: "54.123.45.68", region: "us-east-1c", attached: "i-5678efgh", status: "In-use" },
    { id: "eip-3", ip: "54.123.45.69", region: "ap-southeast-1c", attached: "-", status: "Available" },
    { id: "eip-4", ip: "54.123.45.70", region: "eu-west-1a", attached: "i-9012ijkl", status: "In-use" },
  ]

  if (!detailed) {
    return (
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Elastic IP Usage</CardTitle>
          <Network className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {elasticIpData.used}/{elasticIpData.allocated}
          </div>
          <Progress value={elasticIpData.percentage} className="h-2 mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            {elasticIpData.percentage.toFixed(1)}% of allocated IPs in use
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>IP Address</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Attached To</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {detailedData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.ip}</TableCell>
            <TableCell>{item.region}</TableCell>
            <TableCell>{item.attached}</TableCell>
            <TableCell>{item.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

