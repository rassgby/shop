"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link href="/" className="text-2xl font-bold text-amber-800">
          LUXE Boutique
        </Link>

        {/* Navigation desktop */}
        {/* <nav className="hidden space-x-6 md:flex">
          <Link href="/products" className="text-sm font-medium hover:text-amber-600">
            Tous les Boubous
          </Link>
          <Link href="/products/hommes" className="text-sm font-medium hover:text-amber-600">
            Hommes
          </Link>
          <Link href="/products/femmes" className="text-sm font-medium hover:text-amber-600">
            Femmes
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-amber-600">
            À Propos
          </Link>
        </nav> */}

        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-amber-600 rounded-full">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <Button className="hidden md:flex bg-amber-700 hover:bg-amber-800">Se Connecter</Button>

          {/* Menu mobile */}
          {/* <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button> */}
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white border-b shadow-lg md:hidden">
          <nav className="container px-4 py-3">
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="block py-2 text-sm font-medium hover:text-amber-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tous les Boubous
                </Link>
              </li>
              <li>
                <Link
                  href="/products/hommes"
                  className="block py-2 text-sm font-medium hover:text-amber-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hommes
                </Link>
              </li>
              <li>
                <Link
                  href="/products/femmes"
                  className="block py-2 text-sm font-medium hover:text-amber-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Femmes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 text-sm font-medium hover:text-amber-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À Propos
                </Link>
              </li>
              <li>
                <Button className="w-full bg-amber-700 hover:bg-amber-800" onClick={() => setIsMenuOpen(false)}>
                  Se Connecter
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
