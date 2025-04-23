"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

export default function GenderComparison() {
  // Datos por sexo basados en la primera imagen
  const habitosPorSexoData = [
    {
      habito: "Ha dejado de usar joyas, relojes u objetos de valor",
      hombres: 50,
      mujeres: 68,
    },
    {
      habito: "Ha dejado de llevar mucho dinero en efectivo o tarjetas",
      hombres: 55,
      mujeres: 62,
    },
    {
      habito: "Ha dejado de llegar muy tarde a casa o dejar la casa sola",
      hombres: 30,
      mujeres: 48,
    },
    {
      habito: "Ha dejado de salir de noche",
      hombres: 25,
      mujeres: 45,
    },
    {
      habito: "Ha dejado de ir a la cancha",
      hombres: 20,
      mujeres: 30,
    },
  ]

  return (
    <Card className="mb-8">
      <CardHeader className="bg-gray-50">
        <CardTitle>Diferencias por género</CardTitle>
        <CardDescription>Comparación de hábitos modificados entre hombres y mujeres (Top 5 hábitos)</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={habitosPorSexoData} layout="vertical" margin={{ top: 5, right: 30, left: 220, bottom: 5 }}>
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
              <Legend />
              <Bar dataKey="hombres" name="Hombres" fill="#3b82f6" radius={[0, 0, 0, 0]} />
              <Bar dataKey="mujeres" name="Mujeres" fill="#ec4899" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 rounded-md bg-gray-100 p-4 text-sm">
          <p className="font-medium">Observación clave:</p>
          <p>
            Las mujeres modifican sus hábitos en mayor proporción que los hombres en todas las categorías analizadas,
            evidenciando un impacto diferencial de la inseguridad según el género.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
