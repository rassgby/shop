"use client"

import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type CartItem, useCart } from "@/contexts/cart-context"

interface CartItemProps {
  item: CartItem
}

export function CartItemRow({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="mt-1 text-amber-800 font-semibold">{item.price.toLocaleString("fr-FR")} FCFA</p>
      </div>

      <div className="flex items-center mt-4 sm:mt-0">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="ml-2 text-red-500 hover:text-red-700 hover:bg-red-50"
          onClick={() => removeItem(item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 sm:mt-0 sm:ml-6 text-right">
        <p className="font-bold text-lg">{(item.price * item.quantity).toLocaleString("fr-FR")} FCFA</p>
      </div>
    </div>
  )
}
