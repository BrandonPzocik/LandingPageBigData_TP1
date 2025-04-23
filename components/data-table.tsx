"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

// Datos simulados para la tabla
const tableData = [
  {
    anio: 2017,
    sexo: "Hombre",
    porc_poblacion: 50,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de usar joyas, relojes u objetos de valor",
  },
  {
    anio: 2017,
    sexo: "Mujer",
    porc_poblacion: 68,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de usar joyas, relojes u objetos de valor",
  },
  {
    anio: 2017,
    sexo: "Hombre",
    porc_poblacion: 55,
    grupo_edad: "30-49",
    habitos_modificados: "Ha dejado de usar joyas, relojes u objetos de valor",
  },
  {
    anio: 2017,
    sexo: "Mujer",
    porc_poblacion: 70,
    grupo_edad: "30-49",
    habitos_modificados: "Ha dejado de usar joyas, relojes u objetos de valor",
  },
  {
    anio: 2017,
    sexo: "Hombre",
    porc_poblacion: 55,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de llevar mucho dinero en efectivo o tarjetas",
  },
  {
    anio: 2017,
    sexo: "Mujer",
    porc_poblacion: 62,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de llevar mucho dinero en efectivo o tarjetas",
  },
  {
    anio: 2017,
    sexo: "Hombre",
    porc_poblacion: 25,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de salir de noche",
  },
  {
    anio: 2017,
    sexo: "Mujer",
    porc_poblacion: 45,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de salir de noche",
  },
  {
    anio: 2017,
    sexo: "Hombre",
    porc_poblacion: 20,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de ir a la cancha",
  },
  {
    anio: 2017,
    sexo: "Mujer",
    porc_poblacion: 30,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de ir a la cancha",
  },
  {
    anio: 2017,
    sexo: "Hombre",
    porc_poblacion: 8,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de usar transporte público",
  },
  {
    anio: 2017,
    sexo: "Mujer",
    porc_poblacion: 12,
    grupo_edad: "16-29",
    habitos_modificados: "Ha dejado de usar transporte público",
  },
]

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = tableData.filter(
    (row) =>
      row.habitos_modificados.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.grupo_edad.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.sexo.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      {/* <div className="mb-4">
        <Input
          placeholder="Buscar por hábito, grupo de edad o sexo..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div> */}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Año</TableHead>
              <TableHead>Sexo</TableHead>
              <TableHead>Grupo de Edad</TableHead>
              <TableHead>Hábito Modificado</TableHead>
              <TableHead className="text-right">Porcentaje (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.anio}</TableCell>
                <TableCell>{row.sexo}</TableCell>
                <TableCell>{row.grupo_edad}</TableCell>
                <TableCell className="max-w-xs truncate">{row.habitos_modificados}</TableCell>
                <TableCell className="text-right">{row.porc_poblacion}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
