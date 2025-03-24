"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "@/components/ui/chart"

export function RegionCostDistribution() {
  // In a real implementation, this would fetch data from Splunk
  const data = [
    { name: "Tokyo (us-east-1c)", value: 540 },
    { name: "Mumbai (ap-southeast-1c)", value: 320 },
    { name: "Ireland (eu-west-1a)", value: 280 },
    { name: "Oregon (us-west-2b)", value: 120 },
    { name: "Seoul (ap-northeast-1a)", value: 24 },
  ]

  const COLORS = ["#16a34a", "#22c55e", "#4ade80", "#86efac", "#bbf7d0"]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `$${value}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

