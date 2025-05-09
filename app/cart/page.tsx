"use client"

import Link from "next/link"
import { ArrowLeft, ShoppingBag, Truck, Lock, CreditCard } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { CartItemRow } from "@/components/cart-item"
import { Header } from "@/components/header"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CartPage() {
  const { items, itemCount, subtotal, clearCart } = useCart()
  const [isClient, setIsClient] = useState(false)
  
  // Pour éviter les erreurs d'hydratation
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Frais de livraison fixes (à adapter selon vos besoins)
  const shippingCost = 5000
  // Total avec livraison
  const total = subtotal + (subtotal > 0 ? shippingCost : 0)

  // Animation pour les éléments qui apparaissent
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  if (itemCount === 0 || !isClient) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl mx-auto text-center py-16 bg-white rounded-xl shadow-sm p-8"
          >
            <div className="rounded-full bg-amber-100 w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-amber-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Votre panier est vide</h1>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">Vous n'avez pas encore ajouté de produits à votre panier. Découvrez notre sélection de produits de qualité.</p>
            <Link href="/products">
              <Button className="bg-amber-700 hover:bg-amber-800 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-lg text-white font-medium">
                Découvrir nos produits
              </Button>
            </Link>
          </motion.div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Votre Panier</h1>
            <span className="text-sm bg-amber-100 text-amber-800 py-1 px-3 rounded-full font-medium">
              {itemCount} {itemCount > 1 ? 'articles' : 'article'}
            </span>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-6 pb-4 border-b">
                  <h2 className="text-lg font-medium text-gray-900">Articles</h2>
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-800 hover:bg-red-50 text-sm font-medium transition-colors duration-200"
                    onClick={clearCart}
                  >
                    Vider le panier
                  </Button>
                </div>

                <div className="divide-y">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CartItemRow item={item} />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-4 border-t">
                  <Link href="/products">
                    <Button 
                      variant="outline" 
                      className="flex items-center text-amber-700 border-amber-200 hover:bg-amber-50 transition-all duration-200"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continuer vos achats
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-4">Options de livraison</h3>
                <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                  <Truck className="h-5 w-5 text-amber-700" />
                  <span className="text-sm text-amber-800">Livraison standard (2-3 jours) incluse</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:col-span-4"
            >
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
                <h2 className="text-lg font-medium text-gray-900 mb-6 pb-4 border-b">Récapitulatif</h2>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-medium">{subtotal.toLocaleString("fr-FR")} FCFA</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Frais de livraison</span>
                    <span className="font-medium">{shippingCost.toLocaleString("fr-FR")} FCFA</span>
                  </div>

                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-amber-800">{total.toLocaleString("fr-FR")} FCFA</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Taxes incluses</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/checkout">
                    <Button className="w-full bg-amber-700 hover:bg-amber-800 py-6 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105">
                      Passer à la caisse
                    </Button>
                  </Link>

                  <div className="mt-6 flex flex-col space-y-3">
                    <div className="flex items-center justify-center text-xs text-gray-600">
                      <Lock className="h-3 w-3 mr-1 text-green-600" />
                      <span>Paiement sécurisé</span>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-2">
                      <CreditCard className="h-4 w-4 text-gray-600" />
                      <div className="flex space-x-1">
                        {['visa', 'mastercard', 'paypal'].map(method => (
                          <div key={method} className="w-8 h-5 bg-gray-200 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-green-50 p-3 rounded-lg border border-green-100">
                  <p className="text-xs text-green-700 text-center">
                    Paiement sécurisé. Livraison rapide. Satisfaction garantie.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}