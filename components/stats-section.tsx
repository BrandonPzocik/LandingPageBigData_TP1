import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, DollarSign, ShoppingBag } from "lucide-react"

export default function StatsSection() {
  return (
    <section id="estadisticas" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Estadísticas Clave</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Principales cambios de hábitos en la población de Buenos Aires por miedo a la inseguridad
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-medium flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-red-500" />
                Objetos de valor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-500">60%</p>
              <CardDescription className="mt-1">
                Ha dejado de usar joyas, relojes u objetos de valor por miedo a robos
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-medium flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-red-500" />
                Efectivo y tarjetas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-500">58%</p>
              <CardDescription className="mt-1">
                Ha dejado de llevar mucho dinero en efectivo o tarjetas de crédito/débito
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-medium flex items-center">
                <Clock className="mr-2 h-5 w-5 text-red-500" />
                Horarios nocturnos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-500">38%</p>
              <CardDescription className="mt-1">
                Ha dejado de salir de noche por temor a sufrir un hecho delictivo
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-medium flex items-center">
                <ShoppingBag className="mr-2 h-5 w-5 text-red-500" />
                Centros comerciales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-500">10%</p>
              <CardDescription className="mt-1">
                Ha dejado de frecuentar centros comerciales por miedo a la inseguridad
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
