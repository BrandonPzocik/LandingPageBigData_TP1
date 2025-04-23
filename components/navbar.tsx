"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText, Download } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
            <FileText className="h-4 w-4 text-white" />
          </div>
          <span className="text-xl font-bold">Inseguridad BA</span>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            {isMenuOpen && (
              <div className="absolute left-0 top-16 z-50 w-full bg-white p-4 shadow-md">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="#estadisticas"
                    className="text-lg font-medium hover:text-red-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Estadísticas
                  </Link>
                  <Link
                    href="#graficos"
                    className="text-lg font-medium hover:text-red-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gráficos
                  </Link>
                  <Link
                    href="#testimonios"
                    className="text-lg font-medium hover:text-red-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonios
                  </Link>
                  <Link
                    href="#contacto"
                    className="text-lg font-medium hover:text-red-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-6">
            <Link href="#estadisticas" className="text-sm font-medium hover:text-red-500">
              Estadísticas
            </Link>
            <Link href="#graficos" className="text-sm font-medium hover:text-red-500">
              Gráficos
            </Link>
            <Link href="#testimonios" className="text-sm font-medium hover:text-red-500">
              Testimonios
            </Link>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              <Download className="mr-2 h-4 w-4" />
              Descargar Informe
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
