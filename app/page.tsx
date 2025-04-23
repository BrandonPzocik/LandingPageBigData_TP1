"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HabitosChart from "@/components/habitos-chart"

import DataTable from "@/components/data-table"
import GeneroChart from "@/components/genero-chart"
import EdadDistribucionChart from "@/components/edad-distribucion-chart"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 py-4 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-2xl font-bold">
            Dashboard: Cambios de hábitos por inseguridad en Buenos Aires (2017)
          </h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Tabs defaultValue="dashboard" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="habitos">Hábitos</TabsTrigger>
            <TabsTrigger value="genero">Por Género</TabsTrigger>
            <TabsTrigger value="edad">Por Edad</TabsTrigger>
            <TabsTrigger value="datos">Datos</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Hábitos modificados</h2>
                <HabitosChart height={300} />
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm">
                <h2 className="mb-4 text-lg font-semibold">Diferencias por género</h2>
                <GeneroChart height={300} />
              </div>
              <div className="rounded-lg border bg-white p-4 shadow-sm md:col-span-2">
                <h2 className="mb-4 text-lg font-semibold">Distribución por grupo de edad</h2>
                <EdadDistribucionChart height={400} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="habitos" className="mt-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Hábitos modificados por inseguridad</h2>
              <HabitosChart height={500} />
            </div>
          </TabsContent>

          <TabsContent value="genero" className="mt-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Diferencias por género</h2>
              <GeneroChart height={500} showAll={true} />
            </div>
          </TabsContent>

          <TabsContent value="edad" className="mt-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm mb-4">
              <h2 className="mb-4 text-lg font-semibold">Distribución por grupo de edad</h2>
              <EdadDistribucionChart height={500} />
            </div>
           
          </TabsContent>

          <TabsContent value="datos" className="mt-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold">Datos</h2>
              <DataTable />
            </div>
          </TabsContent>
        </Tabs>

        {activeTab === "dashboard" && (
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {[
              { value: "60%", label: "Dejó de usar objetos de valor" },
              { value: "58%", label: "Dejó de llevar dinero en efectivo" },
              { value: "40%", label: "Dejó de llegar tarde a casa" },
              { value: "38%", label: "Dejó de salir de noche" },
            ].map((stat, i) => (
              <div key={i} className="rounded-lg border bg-white p-3 text-center shadow-sm">
                <p className="text-xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-xs text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-200 py-4 text-center text-sm text-gray-600">
      <a href="https://data.buenosaires.gob.ar/dataset/seguridad-habitos"> Fuente del dataset habito y seguridad</a>
      </footer>
    </div>
  )
}
