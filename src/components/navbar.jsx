import Image from 'next/image'
import MobileMenu from './mobile-menu'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/placeholder.svg?height=40&width=40" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <span className="text-xl font-semibold text-gray-700">MeinBabyShop</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Startseite
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Produkte
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Über uns
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Kontakt
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            <button className="text-[#FFB5C7] hover:text-[#ff9fb8]">
              Einloggen
            </button>
            <button className="rounded-full bg-[#FFB5C7] px-6 py-2 text-white hover:bg-[#ff9fb8]">
              Registrieren
            </button>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

