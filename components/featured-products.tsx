"use client"

import { useState } from "react"
import ProductCard from "./product-card"

// Données de produits simulées
const PRODUCTS = [
  {
    id: "1",
    name: "Boubou Traditionnel Homme",
    price: 25000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Hommes",
  },
  {
    id: "2",
    name: "Boubou Brodé Femme",
    price: 30000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Femmes",
  },
  {
    id: "3",
    name: "Ensemble Grand Boubou",
    price: 45000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Hommes",
  },
  {
    id: "4",
    name: "Boubou Bazin Riche",
    price: 50000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Femmes",
  },
  {
    id: "5",
    name: "Boubou Sénégalais",
    price: 35000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Hommes",
  },
  {
    id: "6",
    name: "Boubou Mariage",
    price: 60000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Femmes",
  },
  {
    id: "7",
    name: "Boubou Moderne",
    price: 28000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Hommes",
  },
  {
    id: "8",
    name: "Boubou Cérémonie",
    price: 40000,
    image: "/placeholder.svg?height=300&width=300",
    category: "Femmes",
  },
]

export function FeaturedProducts() {
  const [filter, setFilter] = useState<string>("all")

  const filteredProducts =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((product) => product.category.toLowerCase() === filter.toLowerCase())

  return (
    <div>
      <div className="flex justify-center mb-8 space-x-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${
            filter === "all" ? "bg-amber-700 text-white" : "bg-amber-100 text-amber-800 hover:bg-amber-200"
          }`}
        >
          Tous
        </button>
        <button
          onClick={() => setFilter("hommes")}
          className={`px-4 py-2 rounded-full ${
            filter === "hommes" ? "bg-amber-700 text-white" : "bg-amber-100 text-amber-800 hover:bg-amber-200"
          }`}
        >
          Hommes
        </button>
        <button
          onClick={() => setFilter("femmes")}
          className={`px-4 py-2 rounded-full ${
            filter === "femmes" ? "bg-amber-700 text-white" : "bg-amber-100 text-amber-800 hover:bg-amber-200"
          }`}
        >
          Femmes
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </div>
  )
}
