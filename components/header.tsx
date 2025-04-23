export default function Header() {
  return (
    <header className="bg-red-600 py-4 text-white">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold">Observatorio de Inseguridad</span>
        </div>
        <div>
          <span className="text-sm font-medium">Datos oficiales 2017</span>
        </div>
      </div>
    </header>
  )
}
