import { Card, CardContent } from "@/components/ui/card"

interface RoadmapStepProps {
  number: number
  title: string
  description: string
}

export function RoadmapStep({ number, title, description }: RoadmapStepProps) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
        {number}
      </div>
      <Card className="flex-1 border-none shadow-md">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

