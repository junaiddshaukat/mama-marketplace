import Image from 'next/image'
import { Heart } from 'lucide-react'

export default function ProductCard({ product }) {
  return (
    <div className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md">
      <div className="relative">
        <div className="absolute right-2 top-2 z-10 rounded-full bg-white p-2 shadow-sm">
          <Heart className="h-5 w-5 text-gray-400" />
        </div>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="h-48 w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 font-semibold text-gray-800">{product.name}</h3>
        <p className="mb-2 text-lg font-bold text-[#FF8A00]">€{product.price.toFixed(2)}</p>
        <p className="mb-4 text-sm text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full bg-[#FFE6F0] px-3 py-1">
              <span className="text-sm text-[#FFB5C7]">{product.category}</span>
            </div>
          </div>
          <button className="rounded-full bg-[#E6F0FF] px-4 py-1 text-sm text-[#6B9FFF] transition hover:bg-[#d9e7ff]">
            Details anzeigen
          </button>
        </div>
      </div>
    </div>
  )
}

