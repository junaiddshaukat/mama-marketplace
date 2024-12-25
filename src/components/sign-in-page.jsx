'use client'

import { useState } from 'react'
import Image from 'next/image'
import NavBar from './navbar'
import Footer from './footer'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Bitte füllen Sie alle Felder aus.')
      return
    }
    // Here you would typically handle the sign-in logic
    console.log('Sign in attempt with:', email, password)
    setError('')
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Image
              className="mx-auto h-12 w-auto"
              src="/placeholder.svg?height=48&width=48"
              alt="MeinBabyShop Logo"
              width={48}
              height={48}
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Anmelden bei MeinBabyShop
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  E-Mail-Adresse
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#FFB5C7] focus:outline-none focus:ring-[#FFB5C7] sm:text-sm"
                  placeholder="E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Passwort
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#FFB5C7] focus:outline-none focus:ring-[#FFB5C7] sm:text-sm"
                  placeholder="Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#FFB5C7] focus:ring-[#FFB5C7]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Angemeldet bleiben
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-[#FFB5C7] hover:text-[#ff9fb8]">
                  Passwort vergessen?
                </a>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#FFB5C7] px-4 py-2 text-sm font-medium text-white hover:bg-[#ff9fb8] focus:outline-none focus:ring-2 focus:ring-[#FFB5C7] focus:ring-offset-2"
              >
                Anmelden
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-2 text-gray-500">Oder</span>
              </div>
            </div>

            <div className="mt-6">
              <div>
                <a
                  href="#"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  <span className="sr-only">Registrieren</span>
                  Neues Konto erstellen
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

