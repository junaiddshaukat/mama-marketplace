'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-600 hover:text-gray-900"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-[72px] z-50 bg-white px-4 py-2 shadow-lg">
          <nav className="flex flex-col space-y-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col space-y-2">
            <button className="w-full rounded-full border border-[#FFB5C7] px-6 py-2 text-[#FFB5C7] hover:bg-[#FFB5C7] hover:text-white">
              Log In
            </button>
            <button className="w-full rounded-full bg-[#FFB5C7] px-6 py-2 text-white hover:bg-[#ff9fb8]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

