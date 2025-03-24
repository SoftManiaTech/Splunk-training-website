"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const regions = [
  {
    value: "all",
    label: "All Regions",
  },
  {
    value: "us-east-1c",
    label: "Tokyo (us-east-1c)",
  },
  {
    value: "ap-southeast-1c",
    label: "Mumbai (ap-southeast-1c)",
  },
  {
    value: "eu-west-1a",
    label: "Ireland (eu-west-1a)",
  },
  {
    value: "us-west-2b",
    label: "Oregon (us-west-2b)",
  },
  {
    value: "ap-northeast-1a",
    label: "Seoul (ap-northeast-1a)",
  },
]

export function RegionSelector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("all")

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Region</CardTitle>
      </CardHeader>
      <CardContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
              {value ? regions.find((region) => region.value === value)?.label : "Select region..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search region..." />
              <CommandList>
                <CommandEmpty>No region found.</CommandEmpty>
                <CommandGroup>
                  {regions.map((region) => (
                    <CommandItem
                      key={region.value}
                      value={region.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", value === region.value ? "opacity-100" : "opacity-0")} />
                      {region.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </CardContent>
    </Card>
  )
}

