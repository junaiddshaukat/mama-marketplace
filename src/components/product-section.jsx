import { Heart } from 'lucide-react'
import Image from 'next/image'

export default function ProductSection({ title, products }) {
  return (
    <div className="mb-12 rounded-xl bg-[#F5F8FF] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
          Mehr anzeigen
          <span className="ml-1">→</span>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product._id} className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
            <div className="relative">
              <div className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 shadow-sm">
                <Heart className="h-5 w-5 text-gray-400" />
              </div>
              {/* <Image
                //  src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              /> */}
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-semibold text-gray-800">{product.title}</h3>
              <p className="mb-2 text-lg font-bold text-[#FF8A00]">€{product.price}</p>
              <p className="mb-4 text-sm text-gray-500">{product.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center rounded-full bg-[#FFE6F0] px-3 py-1">
                    <span className="text-sm text-[#FFB5C7]">Berlin</span>
                  </div>
                </div>
                <button className="rounded-full bg-[#E6F0FF] px-4 py-1 text-sm text-[#6B9FFF] transition hover:bg-[#d9e7ff]">
                  Details anzeigen
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

