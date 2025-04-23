"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export default function ChartsSection() {
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

  // Datos por sexo basados en la primera imagen
  const habitosPorSexoData = [
    {
      habito: "Ha dejado de usar joyas, relojes u objetos de valor",
      total: 60,
      hombres: 50,
      mujeres: 68,
    },
    {
      habito: "Ha dejado de llevar mucho dinero en efectivo o tarjetas",
      total: 58,
      hombres: 55,
      mujeres: 62,
    },
    {
      habito: "Ha dejado de llegar muy tarde a casa o dejar la casa sola",
      total: 40,
      hombres: 30,
      mujeres: 48,
    },
    {
      habito: "Ha dejado de salir de noche",
      total: 38,
      hombres: 25,
      mujeres: 45,
    },
    {
      habito: "Ha dejado de ir a la cancha",
      total: 25,
      hombres: 20,
      mujeres: 30,
    },
  ]

  // Datos de tendencia temporal (simulados para el ejemplo)
  const tendenciaData = [
    { anio: "2010", indice: 45 },
    { anio: "2011", indice: 48 },
    { anio: "2012", indice: 52 },
    { anio: "2013", indice: 55 },
    { anio: "2014", indice: 60 },
    { anio: "2015", indice: 65 },
    { anio: "2016", indice: 70 },
    { anio: "2017", indice: 75 },
  ]

  return (
    <section id="graficos" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Análisis de Datos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Visualización de los cambios de hábitos por inseguridad en Buenos Aires (2017)
          </p>
        </div>

        <Tabs defaultValue="habitos" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="habitos">Hábitos Modificados</TabsTrigger>
            <TabsTrigger value="genero">Diferencias por Género</TabsTrigger>
            <TabsTrigger value="tendencia">Evolución Temporal</TabsTrigger>
          </TabsList>

          <TabsContent value="habitos">
            <Card>
              <CardHeader>
                <CardTitle>Hábitos Modificados por Inseguridad</CardTitle>
                <CardDescription>
                  Porcentaje de población que ha modificado sus hábitos debido al temor a la inseguridad (2017)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[600px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={habitosData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 200, bottom: 5 }}
                    >
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
                      <Tooltip
                        formatter={(value) => [`${value}%`, "Porcentaje"]}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Bar dataKey="porcentaje" fill="#ef4444" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="genero">
            <Card>
              <CardHeader>
                <CardTitle>Diferencias por Género</CardTitle>
                <CardDescription>
                  Comparación de hábitos modificados entre hombres y mujeres (Top 5 hábitos, 2017)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={habitosPorSexoData}
                      layout="vertical"
                      margin={{ top: 20, right: 30, left: 200, bottom: 5 }}
                    >
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
                      <Tooltip
                        formatter={(value) => [`${value}%`, "Porcentaje"]}
                        labelFormatter={(label) => `${label}`}
                      />
                      <Legend />
                      <Bar dataKey="hombres" name="Hombres" fill="#3b82f6" radius={[0, 0, 0, 0]} />
                      <Bar dataKey="mujeres" name="Mujeres" fill="#ec4899" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 text-center text-sm text-slate-500">
                  <p>
                    <strong>Nota:</strong> Las mujeres modifican sus hábitos en mayor proporción que los hombres en
                    todas las categorías analizadas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tendencia">
            <Card>
              <CardHeader>
                <CardTitle>Evolución del Índice de Percepción de Inseguridad</CardTitle>
                <CardDescription>Tendencia del índice de percepción de inseguridad (2010-2017)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={tendenciaData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="anio" />
                      <YAxis domain={[40, 80]} />
                      <Tooltip
                        formatter={(value) => [`${value}`, "Índice"]}
                        labelFormatter={(label) => `Año ${label}`}
                      />
                      <Line
                        type="monotone"
                        dataKey="indice"
                        stroke="#ef4444"
                        strokeWidth={3}
                        dot={{ r: 6, fill: "#ef4444" }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-6 text-center text-sm text-slate-500">
                  <p>
                    <strong>Nota:</strong> El índice de percepción de inseguridad ha aumentado constantemente desde
                    2010, alcanzando su punto más alto en 2017.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Imagen Original del Estudio</CardTitle>
              <CardDescription>
                Porcentaje de población que modificó sus hábitos (2017) por sexo - Fuente: Datos oficiales
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <img
                src="/images/porcentaje-por-sexo.png"
                alt="Gráfico original de porcentaje de población que modificó sus hábitos por sexo"
                className="max-h-[600px] object-contain"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
