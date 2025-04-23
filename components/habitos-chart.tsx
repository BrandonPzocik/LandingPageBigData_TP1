"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

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

export default function HabitosChart({ height = 400 }: { height?: number }) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={habitosData} layout="vertical" margin={{ top: 5, right: 30, left: 200, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" domain={[0, 70]} />
          <YAxis
            dataKey="habito"
            type="category"
            width={190}
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              return value.length > 35 ? value.substring(0, 35) + "..." : value
            }}
          />
          <Tooltip formatter={(value) => [`${value}%`, "Porcentaje"]} labelFormatter={(label) => `${label}`} />
          <Bar dataKey="porcentaje" fill="#3b82f6" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
