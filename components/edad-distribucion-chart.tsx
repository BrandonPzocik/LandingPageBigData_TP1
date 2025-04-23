"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

// Datos basados en la imagen proporcionada
const edadDistribucionData = [
  {
    grupo: "18-34",
    "Frecuentar centros comerciales": 7,
    "Ir a la cancha": 15,
    "Ir al cine, teatro, etc.": 9,
    "Llegar tarde a casa": 38,
    "Llevar dinero en efectivo": 59,
    "Salir a caminar": 18,
    "Salir de noche": 28,
    "Tomar taxis": 24,
    "Usar joyas": 49,
    "Usar transporte público": 7,
    "Viajar por ruta": 3,
    "Visitar parientes": 17,
  },
  {
    grupo: "35-64",
    "Frecuentar centros comerciales": 9,
    "Ir a la cancha": 31,
    "Ir al cine, teatro, etc.": 19,
    "Llegar tarde a casa": 40,
    "Llevar dinero en efectivo": 59,
    "Salir a caminar": 22,
    "Salir de noche": 37,
    "Tomar taxis": 27,
    "Usar joyas": 63,
    "Usar transporte público": 8,
    "Viajar por ruta": 7,
    "Visitar parientes": 27,
  },
  {
    grupo: "65 y más",
    "Frecuentar centros comerciales": 10,
    "Ir a la cancha": 35,
    "Ir al cine, teatro, etc.": 25,
    "Llegar tarde a casa": 45,
    "Llevar dinero en efectivo": 60,
    "Salir a caminar": 21,
    "Salir de noche": 45,
    "Tomar taxis": 22,
    "Usar joyas": 67,
    "Usar transporte público": 7,
    "Viajar por ruta": 10,
    "Visitar parientes": 24,
  },
  {
    grupo: "TOTAL",
    "Frecuentar centros comerciales": 9,
    "Ir a la cancha": 25,
    "Ir al cine, teatro, etc.": 17,
    "Llegar tarde a casa": 40,
    "Llevar dinero en efectivo": 59,
    "Salir a caminar": 21,
    "Salir de noche": 35,
    "Tomar taxis": 25,
    "Usar joyas": 59,
    "Usar transporte público": 7,
    "Viajar por ruta": 7,
    "Visitar parientes": 23,
  },
]

// Colores para cada hábito, basados en la imagen
const COLORS = {
  "Frecuentar centros comerciales": "#1f77b4",
  "Ir a la cancha": "#ff7f0e",
  "Ir al cine, teatro, etc.": "#2ca02c",
  "Llegar tarde a casa": "#d62728",
  "Llevar dinero en efectivo": "#9467bd",
  "Salir a caminar": "#8c564b",
  "Salir de noche": "#e377c2",
  "Tomar taxis": "#7f7f7f",
  "Usar joyas": "#bcbd22",
  "Usar transporte público": "#17becf",
  "Viajar por ruta": "#1f77b4",
  "Visitar parientes": "#ff7f0e",
}

export default function EdadDistribucionChart({ height = 400 }: { height?: number }) {
  return (
    <div style={{ width: "100%", height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={edadDistribucionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="grupo" />
          <YAxis domain={[0, 70]} />
          <Tooltip formatter={(value) => [`${value}%`, ""]} />
          <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ paddingLeft: "10px" }} />
          <Bar
            dataKey="Frecuentar centros comerciales"
            name="Ha dejado de frecuentar centros comerciales"
            fill={COLORS["Frecuentar centros comerciales"]}
          />
          <Bar dataKey="Ir a la cancha" name="Ha dejado de ir a la cancha" fill={COLORS["Ir a la cancha"]} />
          <Bar
            dataKey="Ir al cine, teatro, etc."
            name="Ha dejado de ir al cine, teatro, etc."
            fill={COLORS["Ir al cine, teatro, etc."]}
          />
          <Bar
            dataKey="Llegar tarde a casa"
            name="Ha dejado de llegar tarde a casa"
            fill={COLORS["Llegar tarde a casa"]}
          />
          <Bar
            dataKey="Llevar dinero en efectivo"
            name="Ha dejado de llevar dinero en efectivo"
            fill={COLORS["Llevar dinero en efectivo"]}
          />
          <Bar dataKey="Salir a caminar" name="Ha dejado de salir a caminar" fill={COLORS["Salir a caminar"]} />
          <Bar dataKey="Salir de noche" name="Ha dejado de salir de noche" fill={COLORS["Salir de noche"]} />
          <Bar dataKey="Tomar taxis" name="Ha dejado de tomar taxis" fill={COLORS["Tomar taxis"]} />
          <Bar dataKey="Usar joyas" name="Ha dejado de usar joyas" fill={COLORS["Usar joyas"]} />
          <Bar
            dataKey="Usar transporte público"
            name="Ha dejado de usar transporte público"
            fill={COLORS["Usar transporte público"]}
          />
          <Bar dataKey="Viajar por ruta" name="Ha dejado de viajar por ruta" fill={COLORS["Viajar por ruta"]} />
          <Bar dataKey="Visitar parientes" name="Ha dejado de visitar parientes" fill={COLORS["Visitar parientes"]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
