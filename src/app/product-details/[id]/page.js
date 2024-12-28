"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Calendar, MoreVertical } from "lucide-react";
import ImageGallery from "../../../components/image-gallery";
import AuthModal from "../../../components/auth-modal";

// This would come from your API/database
const product = {
  id: 1,
  title: "Baby Clothing Set",
  price: 50.0,
  description:
    "Beautiful baby clothing set including a striped onesie, socks, and accessories. Perfect for newborns and infants.",
  images: [
    "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png",
    "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png",
    "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png",

    "https://res.cloudinary.com/junaidshaukat/image/upload/v1726404885/gddm7z78jtubdcwaec00.png",
  ],
  category: "Clothing",
  condition: "Needed",
  publishedAt: "August 1, 2024",
  seller: {
    name: "Admin",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4.8,
  },
};

export default function ProductPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This would come from your auth system
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleContactClick = () => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12 pt-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Image Gallery */}
          <ImageGallery images={product.images} />

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">
                  {product.title}
                </h1>
                <button className="rounded-full p-2 hover:bg-gray-100">
                  <MoreVertical className="h-6 w-6 text-gray-400" />
                </button>
              </div>
              <p className="text-2xl font-bold text-[#FF8A00]">
                CHF {product.price.toFixed(2)}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#FFE6F0] px-3 py-1 text-sm text-[#FFB5C7]">
                {product.category}
              </span>
              <span className="rounded-full bg-[#FFE6F0] px-3 py-1 text-sm text-[#FFB5C7]">
                {product.condition}
              </span>
            </div>

            {/* Description */}
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Publication Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Published on {product.publishedAt}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Zürich
              </span>
            </div>

            {/* Seller Info */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-medium">{product.seller.name}</h3>
                  <p className="text-sm text-gray-500">
                    ⭐ {product.seller.rating} Rating
                  </p>
                </div>
              </div>

              <button
                onClick={handleContactClick}
                className="w-full rounded-lg bg-[#FFB5C7] px-4 py-3 font-medium text-white transition-colors hover:bg-[#ff9fb8]"
              >
                Show contact information
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          returnUrl={`/products/${product.id}`}
        />
      )}
    </div>
  );
}
