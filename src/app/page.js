'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/navbar";
import HeroSection from "../components/hero-section";
import CategorySection from "../components/category-section";
import ProductSection from "../components/product-section";
import Footer from "../components/footer";

export default function Page() {
  const [clothingProducts, setClothingProducts] = useState([]);
  const [toyProducts, setToyProducts] = useState([]);
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("http://localhost:8000/product/getall-products")
      .then((response) => {
        const products = response.data.ads;

        // Filter and sort by category and views (in descending order)
        const filteredClothing = products
          .filter((product) =>
            product.category.toLowerCase().includes("bekleidung".toLowerCase())
          )
          .sort((a, b) => b.views - a.views); // Sort by views (descending)

        const filteredToy = products
          .filter((product) =>
            product.category.toLowerCase().includes("spielzeug".toLowerCase())
          )
          .sort((a, b) => b.views - a.views);

        const filteredFood = products
          .filter((product) =>
            product.category.toLowerCase().includes("ernährung".toLowerCase())
          )
          .sort((a, b) => b.views - a.views);

        setClothingProducts(filteredClothing);
        setToyProducts(filteredToy);
        setFoodItems(filteredFood);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar/>
      <main className="mx-auto max-w-7xl px-4">
        <HeroSection />
        <CategorySection />
        <ProductSection title="Bekleidung" products={clothingProducts} />
        <ProductSection title="Spielzeug" products={toyProducts} />
        <ProductSection title="Ernährung" products={foodItems} />
      </main>
      <Footer />
    </div>
  );
}
