import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function RecentServers() {
  // In a real implementation, this would fetch data from Splunk
  const servers = [
    {
      id: "i-1234abcd",
      name: "web-server-1",
      region: "us-east-1c",
      type: "t3.medium",
      startTime: "2023-01-15 08:30:45",
      uptime: "15d 7h 22m",
    },
    {
      id: "i-5678efgh",
      name: "app-server-1",
      region: "us-east-1c",
      type: "m5.large",
      startTime: "2023-01-20 12:15:30",
      uptime: "10d 3h 37m",
    },
    {
      id: "i-9012ijkl",
      name: "db-server-1",
      region: "ap-southeast-1c",
      type: "r5.xlarge",
      startTime: "2023-01-22 16:45:10",
      uptime: "8d 23h 7m",
    },
    {
      id: "i-3456mnop",
      name: "cache-server-1",
      region: "eu-west-1a",
      type: "t3.small",
      startTime: "2023-01-25 09:10:22",
      uptime: "5d 14h 42m",
    },
    {
      id: "i-7890qrst",
      name: "worker-1",
      region: "us-west-2b",
      type: "c5.large",
      startTime: "2023-01-28 14:20:15",
      uptime: "2d 1h 32m",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Start Time</TableHead>
          <TableHead>Uptime</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {servers.map((server) => (
          <TableRow key={server.id}>
            <TableCell className="font-medium">{server.name}</TableCell>
            <TableCell>{server.region}</TableCell>
            <TableCell>{server.type}</TableCell>
            <TableCell>{server.startTime}</TableCell>
            <TableCell>
              <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800">
                {server.uptime}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

