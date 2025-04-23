export default function Footer() {
  return (
    <footer id="contacto" className="bg-gray-800 py-6 text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
         Fuente: 
        </p>
        <p className="mt-2 text-xs text-gray-400">© {new Date().getFullYear()} Observatorio de Inseguridad</p>
      </div>
    </footer>
  )
}
