'use client'

import { Heart, MessageCircle, Share2 } from 'lucide-react'

export default function Favorites() {
  const favorites = [
    {
      id: 1,
      title: 'Modern Apartment in Downtown',
      category: 'Real Estate',
      price: '$1,200/month',
      location: 'New York, NY',
      image: '/placeholder.svg?height=200&width=300',
      saved: true,
      date: '2023-06-15',
    },
    // Add more favorites as needed
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Favorites</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <button
                className={`absolute right-4 top-4 rounded-full bg-white/90 p-2 ${
                  item.saved ? 'text-[#FF9EAA]' : 'text-gray-500'
                }`}
              >
                <Heart className="h-5 w-5" fill={item.saved ? '#FF9EAA' : 'none'} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="mb-2">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
              
              <div className="mb-4">
                <div className="text-lg font-semibold text-[#FF9EAA]">
                  {item.price}
                </div>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="text-sm text-gray-500">
                  Added {item.date}
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
                    <MessageCircle className="h-5 w-5" />
                  </button>
                  <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

