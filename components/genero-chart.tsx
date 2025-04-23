"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

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
  {
    habito: "Ha dejado de tomar taxis en la calle",
    hombres: 22,
    mujeres: 26,
  },
  {
    habito: "Ha dejado de visitar parientes o amigos",
    hombres: 18,
    mujeres: 25,
  },
  {
    habito: "Ha dejado de salir a caminar, correr o andar en bicicleta",
    hombres: 15,
    mujeres: 24,
  },
  {
    habito: "Ha dejado de ir al cine, teatro, recitales o comer afuera",
    hombres: 14,
    mujeres: 22,
  },
  {
    habito: "Ha dejado de frecuentar centros comerciales",
    hombres: 8,
    mujeres: 12,
  },
  {
    habito: "Ha dejado de usar transporte público",
    hombres: 6,
    mujeres: 10,
  },
  {
    habito: "Ha dejado de viajar por ruta o autopista",
    hombres: 5,
    mujeres: 9,
  },
]

export default function GeneroChart({ height = 400, showAll = false }: { height?: number; showAll?: boolean }) {
  // Si showAll es false, solo mostrar los 5 primeros hábitos
  const dataToShow = showAll ? habitosPorSexoData : habitosPorSexoData.slice(0, 5)

  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataToShow} layout="vertical" margin={{ top: 5, right: 30, left: 200, bottom: 5 }}>
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
          <Legend />
          <Bar dataKey="hombres" name="Hombres" fill="#3b82f6" radius={[0, 0, 0, 0]} />
          <Bar dataKey="mujeres" name="Mujeres" fill="#ec4899" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
