export default function Footer() {
    return (
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
          {/* Mobile Footer */}
          <div className="space-y-8 md:hidden">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="w-full rounded-lg border px-3 py-2"
                />
                <button className="w-full rounded-lg bg-[#FFB5C7] px-4 py-2 text-white hover:bg-[#ff9fb8]">
                  Anmelden
                </button>
              </div>
            </div>
  
            <div className="space-y-6">
              {['Über uns', 'Kundenservice', 'Rechtliches'].map((section) => (
                <div key={section} className="border-t pt-4">
                  <h3 className="mb-2 text-lg font-semibold">{section}</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          {/* Desktop Footer */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Über uns</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Unternehmen</li>
                <li>Karriere</li>
                <li>Presse</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Kundenservice</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Hilfe & Kontakt</li>
                <li>Versand & Lieferung</li>
                <li>Rückgabe</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Rechtliches</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>AGB</li>
                <li>Datenschutz</li>
                <li>Impressum</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-sm text-gray-600">
                Melden Sie sich für unseren Newsletter an und erhalten Sie exklusive Angebote!
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="rounded-lg border px-3 py-2"
                />
                <button className="rounded-lg bg-[#FFB5C7] px-4 py-2 text-white hover:bg-[#ff9fb8]">
                  Anmelden
                </button>
              </div>
            </div>
          </div>
  
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
            © 2024 MeinBabyShop. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    )
  }
  
  