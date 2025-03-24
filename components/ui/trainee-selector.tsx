"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const trainees = [
  {
    value: "all",
    label: "All Trainees",
  },
  {
    value: "muruganantham",
    label: "Muruganantham Pothanaickar",
  },
  {
    value: "kaiyappan",
    label: "Kaiyappan Rangan",
  },
  {
    value: "rajesh",
    label: "Rajesh Kumar",
  },
  {
    value: "priya",
    label: "Priya Sharma",
  },
  {
    value: "vikram",
    label: "Vikram Singh",
  },
]

export function TraineeSelector() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("all")

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Trainee</CardTitle>
      </CardHeader>
      <CardContent>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
              {value ? trainees.find((trainee) => trainee.value === value)?.label : "Select trainee..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search trainee..." />
              <CommandList>
                <CommandEmpty>No trainee found.</CommandEmpty>
                <CommandGroup>
                  {trainees.map((trainee) => (
                    <CommandItem
                      key={trainee.value}
                      value={trainee.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check className={cn("mr-2 h-4 w-4", value === trainee.value ? "opacity-100" : "opacity-0")} />
                      {trainee.label}
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

