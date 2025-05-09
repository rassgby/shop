"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addItem } = useCart()
  
  const handleAddToCart = () => {
    addItem({ id, name, price, image, category })
    toast.success(`${name} ajouté au panier`, {
      description: "Accédez au panier pour finaliser votre commande",
      duration: 3000,
    })
  }
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group border border-gray-200 rounded-lg">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs font-medium text-white bg-amber-600 rounded-full shadow-sm">{category}</span>
        </div>
      </div>
      
      <CardContent className="p-5">
        <Link href={`/products/${id}`} className="block">
          <h3 className="mb-2 text-lg font-semibold text-gray-800 transition-colors duration-200 hover:text-amber-700 line-clamp-2">{name}</h3>
        </Link>
        <p className="font-bold text-xl text-amber-800">{price.toLocaleString("fr-FR")} <span className="text-sm font-medium">FCFA</span></p>
      </CardContent>
      
      <CardFooter className="px-5 pb-5 pt-0">
        <Button 
          className="w-full bg-amber-700 hover:bg-amber-800 text-white font-medium py-2 transition-all duration-200 shadow-sm hover:shadow transform hover:-translate-y-0.5" 
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Ajouter au Panier
        </Button>
      </CardFooter>
    </Card>
  )
}