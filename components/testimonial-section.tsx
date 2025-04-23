import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

export default function TestimonialSection() {
  const testimonios = [
    {
      id: 1,
      nombre: "María Fernández",
      edad: 34,
      barrio: "Palermo",
      testimonio:
        "Dejé de usar joyas y relojes por completo. Antes usaba mis anillos y collar de oro todos los días, ahora los tengo guardados y solo uso bijouterie barata cuando salgo.",
      iniciales: "MF",
    },
    {
      id: 2,
      nombre: "Carlos Gutiérrez",
      edad: 42,
      barrio: "Belgrano",
      testimonio:
        "Ya no llevo la billetera en el bolsillo trasero ni saco el celular en la calle. Siempre llevo lo justo de dinero y trato de pagar todo con aplicaciones para no mostrar tarjetas.",
      iniciales: "CG",
    },
    {
      id: 3,
      nombre: "Luciana Moretti",
      edad: 28,
      barrio: "San Telmo",
      testimonio:
        "Cambié mis horarios completamente. Antes salía a correr por las noches después del trabajo, ahora me levanto a las 6 de la mañana para hacerlo con luz del día.",
      iniciales: "LM",
    },
    {
      id: 4,
      nombre: "Roberto Sánchez",
      edad: 55,
      barrio: "Caballito",
      testimonio:
        "Dejé de ir a la cancha los domingos, una tradición que tenía desde hace 30 años. La zona se volvió muy peligrosa y ya tuve dos malas experiencias.",
      iniciales: "RS",
    },
  ]

  return (
    <section id="testimonios" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Testimonios</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Historias reales de porteños que han modificado sus hábitos por miedo a la inseguridad
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonios.map((testimonio) => (
            <Card key={testimonio.id} className="overflow-hidden">
              <CardContent className="pt-6 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-red-100" />
                <p className="text-lg leading-relaxed mb-4">"{testimonio.testimonio}"</p>
              </CardContent>
              <CardFooter className="border-t bg-slate-50 p-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 border-2 border-red-500">
                    <AvatarFallback className="bg-red-100 text-red-500">{testimonio.iniciales}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-sm font-medium">{testimonio.nombre}</p>
                    <p className="text-xs text-slate-500">
                      {testimonio.edad} años, {testimonio.barrio}
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
