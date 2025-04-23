import { Button } from "@/components/ui/button"
import { ArrowRight, AlertTriangle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100 py-20">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-100 opacity-50"></div>
      <div className="absolute -left-20 bottom-10 h-40 w-40 rounded-full bg-red-100 opacity-50"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
              <AlertTriangle className="mr-1 h-4 w-4" />
              Datos oficiales 2017
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              El impacto de la <span className="text-red-500">inseguridad</span> en Buenos Aires
            </h1>
            <p className="max-w-[600px] text-lg text-slate-700">
              Análisis de cómo el miedo a sufrir hechos delictivos ha modificado los hábitos y rutinas de los porteños,
              con diferencias significativas entre hombres y mujeres.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button className="bg-red-500 hover:bg-red-600">
                Ver estadísticas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                Descargar informe completo
              </Button>
            </div>
          </div>
          <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-xl">
            <img
              src="/images/porcentaje-por-habito.png"
              alt="Gráfico de hábitos modificados por inseguridad en Buenos Aires"
              className="h-full w-full object-contain p-4"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <p className="text-sm font-medium">Porcentaje de población que modificó sus hábitos (2017)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
