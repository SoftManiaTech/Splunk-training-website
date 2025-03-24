"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

export function Overview() {
  // In a real implementation, this would fetch data from Splunk
  const data = [
    {
      name: "Jan 1",
      value: 12,
    },
    {
      name: "Jan 5",
      value: 18,
    },
    {
      name: "Jan 10",
      value: 15,
    },
    {
      name: "Jan 15",
      value: 22,
    },
    {
      name: "Jan 20",
      value: 20,
    },
    {
      name: "Jan 25",
      value: 18,
    },
    {
      name: "Jan 30",
      value: 24,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#16a34a" strokeWidth={2} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

