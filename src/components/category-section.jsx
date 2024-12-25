import Image from 'next/image'

export default function CategorySection() {
  const categories = [
    { name: "Kindersitze", image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png?height=60&width=60" },
    { name: "Kinderwagen", image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png?height=60&width=60" },
    { name: "Unterwegs", image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png?height=60&width=60" },
    { name: "Spielzeug", image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png?height=60&width=60" },
    { name: "Ernährung", image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png?height=60&width=60" },
    { name: "Wohnen", image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png?height=60&width=60" },
    { name: "Bekleidung", image: "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png?height=60&width=60" },
  ]

  return (
    <div className="mb-12">
      <div className="flex justify-between gap-4 overflow-x-auto px-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex min-w-[100px] cursor-pointer flex-col items-center gap-2 transition hover:opacity-80"
          >
              <span className="text-lg font-bold text-gray-600">{category.name}</span>
            <div className="rounded-full bg-gray-50 p-4 shadow-sm">
              <Image
                src={category.image}
                alt={category.name}
                width={60}
                height={60}
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

