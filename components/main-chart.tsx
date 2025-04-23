"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

export default function MainChart() {
  // Datos reales basados en la imagen proporcionada
  const habitosData = [
    { habito: "Ha dejado de usar joyas, relojes u objetos de valor", porcentaje: 60 },
    { habito: "Ha dejado de llevar mucho dinero en efectivo o tarjetas", porcentaje: 58 },
    { habito: "Ha dejado de llegar muy tarde a casa o dejar la casa sola", porcentaje: 40 },
    { habito: "Ha dejado de salir de noche", porcentaje: 38 },
    { habito: "Ha dejado de ir a la cancha", porcentaje: 25 },
    { habito: "Ha dejado de tomar taxis en la calle", porcentaje: 24 },
    { habito: "Ha dejado de visitar parientes o amigos", porcentaje: 22 },
    { habito: "Ha dejado de salir a caminar, correr o andar en bicicleta", porcentaje: 20 },
    { habito: "Ha dejado de ir al cine, teatro, recitales o comer afuera", porcentaje: 18 },
    { habito: "Ha dejado de frecuentar centros comerciales", porcentaje: 10 },
    { habito: "Ha dejado de usar transporte público", porcentaje: 8 },
    { habito: "Ha dejado de viajar por ruta o autopista", porcentaje: 7 },
  ]

  return (
    <Card className="mb-8">
      <CardHeader className="bg-gray-50">
        <CardTitle>Porcentaje de población que modificó sus hábitos</CardTitle>
        <CardDescription>
          Hábitos modificados por miedo a sufrir un hecho de inseguridad en Buenos Aires
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={habitosData} layout="vertical" margin={{ top: 5, right: 30, left: 220, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 70]} />
              <YAxis
                dataKey="habito"
                type="category"
                width={210}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => {
                  return value.length > 40 ? value.substring(0, 40) + "..." : value
                }}
              />
              <Tooltip formatter={(value) => [`${value}%`, "Porcentaje"]} labelFormatter={(label) => `${label}`} />
              <Bar dataKey="porcentaje" fill="#dc2626" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
