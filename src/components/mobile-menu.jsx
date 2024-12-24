'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[72px] z-50 bg-white px-4 py-2 shadow-lg">
          <nav className="flex flex-col space-y-4 py-4">
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
          </nav>
        </div>
      )}
    </div>
  )
}

