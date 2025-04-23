import { Card, CardContent } from "@/components/ui/card"

export default function KeyStats() {
  const stats = [
    {
      value: "60%",
      label: "Ha dejado de usar joyas y objetos de valor",
    },
    {
      value: "58%",
      label: "Ha dejado de llevar dinero en efectivo",
    },
    {
      value: "40%",
      label: "Ha dejado de llegar tarde a casa",
    },
    {
      value: "38%",
      label: "Ha dejado de salir de noche",
    },
  ]

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-red-600 p-4 text-center text-white">
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-sm">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
