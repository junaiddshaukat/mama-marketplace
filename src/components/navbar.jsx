import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/placeholder.svg?height=40&width=40" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <span className="text-xl font-semibold text-gray-700">Mama Marketplace</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/all-products" className="text-gray-600 hover:text-gray-900">
            Products
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/subscription" className="text-gray-600 hover:text-gray-900">
           Subscription
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
          <Link href="/login">
          <button className="text-[#FFB5C7] hover:text-[#ff9fb8]">
              Log In
            </button>
          </Link>
          <Link href="/register">
          <button className="rounded-full bg-[#FFB5C7] px-6 py-2 text-white hover:bg-[#ff9fb8]">
              Sign Up
            </button>

          </Link>
          
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

