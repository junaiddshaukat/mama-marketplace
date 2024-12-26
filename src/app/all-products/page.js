import NavBar from "@/components/navbar"
import AllProductsPage from "../../components/all-products-page"
import Footer from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Babybekleidung Set",
    price: 29.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Süßes Set für Neugeborene",
    category: "Bekleidung"
  },
  {
    id: 2,
    name: "Holz-Bausteine",
    price: 19.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Pädagogisches Spielzeug für Kleinkinder",
    category: "Spielzeug"
  },
  {
    id: 3,
    name: "Bio-Babybrei",
    price: 3.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Gesunde Ernährung für Babys",
    category: "Ernährung"
  },
  {
    id: 4,
    name: "Wickelkommode",
    price: 149.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Praktische Kommode mit Wickelauflage",
    category: "Möbel"
  },
  {
    id: 5,
    name: "Babytragetuch",
    price: 39.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Bequemes Tragetuch für Babys",
    category: "Pflege"
  },
  {
    id: 6,
    name: "Stoffwindeln Set",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=200",
    description: "Umweltfreundliche Windeln",
    category: "Pflege"
  }
]

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
        <NavBar/>
      <AllProductsPage products={products} />
      <Footer/>
    </div>
  )
}

