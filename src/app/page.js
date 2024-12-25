import NavBar from "../components/navbar"
import HeroSection from "../components/hero-section"
import CategorySection from "../components/category-section"
import ProductSection from "../components/product-section"
import Footer from "../components/footer"

export default function Page() {
  const clothingProducts = [
    {
      id: 1,
      name: "Babybekleidung",
      price: "20.00",
      image: "/placeholder.svg?height=200&width=200",
      description: "eaque porro quisquam est qui dolorem ipsum quia dolor sit",
    },
    {
      id: 2,
      name: "Weihnachtsmann-Kostüm",
      price: "20.00",
      image: "/placeholder.svg?height=200&width=200",
      description: "eaque porro quisquam est qui dolorem ipsum quia dolor sit",
    },
    {
      id: 3,
      name: "Baby-Weste",
      price: "20.00",
      image: "/placeholder.svg?height=200&width=200",
      description: "eaque porro quisquam est qui dolorem ipsum quia dolor sit",
    },
    {
      id: 4,
      name: "Baby-Weste",
      price: "20.00",
      image: "/placeholder.svg?height=200&width=200",
      description: "eaque porro quisquam est qui dolorem ipsum quia dolor sit",
    },
  ]

  const toyProducts = [
    {
      id: 1,
      name: "Niedliche Stofftiere",
      price: "20.00",
      image: "/placeholder.svg?height=200&width=200",
      description: "eaque porro quisquam est qui dolorem ipsum quia dolor sit",
    },
    {
      id: 2,
      name: "Baby-Spielzeug",
      price: "20.00",
      image: "/placeholder.svg?height=200&width=200",
      description: "eaque porro quisquam est qui dolorem ipsum quia dolor sit",
    },
    {
      id: 3,
      name: "Runde Katze",
      price: "20.00",
      image: "/placeholder.svg?height=200&width=200",
      description: "eaque porro quisquam est qui dolorem ipsum quia dolor sit",
    },
    {
      id: 4,
      name: "Niedliche Figur",
      price: "20.00",
      image: "/placeholder.svg?height=200&width=200",
      description: "eaque porro quisquam est qui dolorem ipsum quia dolor sit",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="mx-auto max-w-7xl px-4">
        <HeroSection />
        <CategorySection />
        <ProductSection title="Bekleidung" products={clothingProducts} />
        <ProductSection title="Spielzeug" products={toyProducts} />
        <ProductSection title="Spielzeug" products={toyProducts} />
      </main>
      <Footer />
    </div>
  )
}

