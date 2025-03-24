"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function CostBreakdown() {
  // In a real implementation, this would fetch data from Splunk
  const data = [
    {
      name: "Week 1",
      EC2: 240,
      EIP: 30,
      EBS: 120,
    },
    {
      name: "Week 2",
      EC2: 300,
      EIP: 30,
      EBS: 150,
    },
    {
      name: "Week 3",
      EC2: 200,
      EIP: 30,
      EBS: 180,
    },
    {
      name: "Week 4",
      EC2: 278,
      EIP: 30,
      EBS: 190,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="EC2" name="EC2 Instances" fill="#16a34a" radius={[4, 4, 0, 0]} />
        <Bar dataKey="EIP" name="Elastic IPs" fill="#22c55e" radius={[4, 4, 0, 0]} />
        <Bar dataKey="EBS" name="Storage (EBS)" fill="#4ade80" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

