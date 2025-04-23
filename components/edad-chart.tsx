"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

// Datos simulados de distribución por grupo de edad
const edadData = [
  {
    grupo: "16-29",
    "Dejó de usar joyas": 55,
    "Dejó de llevar dinero": 50,
    "Dejó de salir de noche": 45,
    "Dejó de ir a la cancha": 20,
    "Dejó de usar transporte público": 10,
  },
  {
    grupo: "30-49",
    "Dejó de usar joyas": 62,
    "Dejó de llevar dinero": 60,
    "Dejó de salir de noche": 40,
    "Dejó de ir a la cancha": 25,
    "Dejó de usar transporte público": 8,
  },
  {
    grupo: "50-64",
    "Dejó de usar joyas": 65,
    "Dejó de llevar dinero": 63,
    "Dejó de salir de noche": 35,
    "Dejó de ir a la cancha": 22,
    "Dejó de usar transporte público": 7,
  },
  {
    grupo: "65 y más",
    "Dejó de usar joyas": 58,
    "Dejó de llevar dinero": 60,
    "Dejó de salir de noche": 30,
    "Dejó de ir a la cancha": 15,
    "Dejó de usar transporte público": 12,
  },
]

export default function EdadChart({ height = 400 }: { height?: number }) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={edadData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="grupo" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend />
          <Bar dataKey="Dejó de usar joyas" fill="#3b82f6" />
          <Bar dataKey="Dejó de llevar dinero" fill="#ef4444" />
          <Bar dataKey="Dejó de salir de noche" fill="#10b981" />
          <Bar dataKey="Dejó de ir a la cancha" fill="#f59e0b" />
          <Bar dataKey="Dejó de usar transporte público" fill="#8b5cf6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
