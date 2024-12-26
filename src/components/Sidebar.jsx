'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FileText, PlusCircle, Star, Phone, UserCircle, CreditCard, LogOut, Menu, X } from 'lucide-react'
// import { Footer2 } from './Footer-2'

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Ads', href: '/dashboard/my-ads', icon: FileText },
    { name: 'Add Ad', href: '/dashboard/add-ad', icon: PlusCircle },
    { name: 'My Favorites', href: '/dashboard/favorites', icon: Star },
    { name: 'Contact Information', href: '/dashboard/contact', icon: Phone },
    { name: 'Edit Profile', href: '/dashboard/profile', icon: UserCircle },
    { name: 'Subscription', href: '/dashboard/subscription', icon: CreditCard },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

     <div>
         {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-800/50 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
     </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-4 left-4 z-50 w-72 transform rounded-2xl bg-white p-6 shadow-lg transition-all duration-200 ease-in-out md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 md:hidden"
        >
          <X className="h-5 w-5" />
        </button>

        {/* User Profile */}
        <div className="mb-8 text-center">
          <div className="relative mx-auto h-20 w-20 rounded-full bg-[#9DD5E3]">
            <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></div>
            <div className="flex h-full items-center justify-center text-2xl text-white">
              JD
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-500">@johndoe123</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-[#9DD5E3]/10 text-[#9DD5E3]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <button
          className="mt-8 flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Log out
        </button>
      </aside>

      {/* Mobile header */}
      <div className="sticky top-0 z-40 flex h-16 items-center bg-white shadow-sm md:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="px-4 text-gray-500 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Main content */}
      <main className="min-h-screen bg-gray-50 p-6 md:ml-80">
        <div className="mx-auto max-w-4xl mb-5">{children}</div>
      {/* <Footer2/> */}
      </main>

    </div>
  )
}

