"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, Truck, User } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  // Utilisation de useEffect pour initialiser l'état côté client uniquement
  const [isClient, setIsClient] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  
  // Éviter les erreurs d'hydratation en s'assurant que les états sont initialisés côté client
  useEffect(() => {
    setIsClient(true)
  }, [])

  const { items, subtotal, itemCount, clearCart } = useCart()
  const router = useRouter()

  // Frais de livraison fixes
  const shippingCost = 5000
  // Total avec livraison
  const total = subtotal + (subtotal > 0 ? shippingCost : 0)

  // Gérer le changement de méthode de paiement
  const handlePaymentMethodChange = (value: React.SetStateAction<string>) => {
    setPaymentMethod(value)
  }

  // Simuler la soumission de la commande
  const handleSubmitOrder = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler un délai de traitement
    setTimeout(() => {
      toast.success("Votre commande a été passée avec succès!")
      clearCart()
      router.push("/checkout/success")
      setIsSubmitting(false)
    }, 2000)
  }

  // Attendre que le composant soit monté côté client pour éviter les erreurs d'hydratation
  if (!isClient) {
    return null; // Ne rien rendre jusqu'à ce que le composant soit monté côté client
  }

  if (itemCount === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center py-16">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Votre panier est vide</h1>
            <p className="text-gray-500 mb-8">
              Vous ne pouvez pas procéder au paiement sans articles dans votre panier.
            </p>
            <Link href="/products">
              <Button className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-2 rounded-md transition-colors">
                Découvrir nos produits
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Paiement</h1>

          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmitOrder} className="space-y-8">
                {/* Informations personnelles */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <User className="h-5 w-5 text-amber-600 mr-2" />
                    <h2 className="text-lg font-medium text-gray-900">Informations personnelles</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-700">Prénom</Label>
                      <Input 
                        id="firstName" 
                        required 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-700">Nom</Label>
                      <Input 
                        id="lastName" 
                        required 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700">Téléphone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        required 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                      />
                    </div>
                  </div>
                </div>

                {/* Adresse de livraison */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <Truck className="h-5 w-5 text-amber-600 mr-2" />
                    <h2 className="text-lg font-medium text-gray-900">Adresse de livraison</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="address" className="text-gray-700">Adresse</Label>
                      <Input 
                        id="address" 
                        required 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city" className="text-gray-700">Ville</Label>
                        <Input 
                          id="city" 
                          required 
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="region" className="text-gray-700">Région</Label>
                        <Input 
                          id="region" 
                          required 
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="notes" className="text-gray-700">Instructions de livraison (optionnel)</Label>
                      <Textarea
                        id="notes"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50"
                        placeholder="Instructions spéciales pour la livraison..."
                      />
                    </div>
                  </div>
                </div>

                {/* Méthode de paiement */}
                <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <CreditCard className="h-5 w-5 text-amber-600 mr-2" />
                    <h2 className="text-lg font-medium text-gray-900">Méthode de paiement</h2>
                  </div>

                  {isClient && (
                    <RadioGroup 
                      defaultValue="card" 
                      className="space-y-4"
                      value={paymentMethod}
                      onValueChange={handlePaymentMethodChange}
                    >
                    <div className="flex items-center space-x-2 border rounded-md p-4 transition-colors hover:bg-gray-50">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-grow cursor-pointer">
                        <div className="font-medium">Carte bancaire</div>
                        <div className="text-sm text-gray-500">Visa, Mastercard, American Express</div>
                      </Label>
                      <div className="flex space-x-2">
                        <div className="w-10 h-6 bg-blue-600 rounded"></div>
                        <div className="w-10 h-6 bg-red-500 rounded"></div>
                        <div className="w-10 h-6 bg-gray-800 rounded"></div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 border rounded-md p-4 transition-colors hover:bg-gray-50">
                      <RadioGroupItem value="mobile" id="mobile" />
                      <Label htmlFor="mobile" className="flex-grow cursor-pointer">
                        <div className="font-medium">Paiement mobile</div>
                        <div className="text-sm text-gray-500">Orange Money, MTN Mobile Money, Wave</div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2 border rounded-md p-4 transition-colors hover:bg-gray-50">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="flex-grow cursor-pointer">
                        <div className="font-medium">Paiement à la livraison</div>
                        <div className="text-sm text-gray-500">Payez en espèces à la réception de votre commande</div>
                      </Label>
                    </div>
                  </RadioGroup>
                  )}

                  {/* Formulaire de carte bancaire (affiché uniquement si "card" est sélectionné) */}
                  {isClient && paymentMethod === "card" && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-md">
                      <div>
                        <Label htmlFor="cardNumber" className="text-gray-700">Numéro de carte</Label>
                        <Input 
                          id="cardNumber" 
                          placeholder="1234 5678 9012 3456" 
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardName" className="text-gray-700">Nom sur la carte</Label>
                        <Input 
                          id="cardName" 
                          placeholder="John Doe" 
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="expiry" className="text-gray-700">Date d'expiration</Label>
                        <Input 
                          id="expiry" 
                          placeholder="MM/AA" 
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-gray-700">CVV</Label>
                        <Input 
                          id="cvv" 
                          placeholder="123" 
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50" 
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between mt-8">
                  <Link href="/cart">
                    <Button 
                      variant="outline" 
                      type="button" 
                      className="flex items-center border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md transition-colors"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Retour au panier
                    </Button>
                  </Link>

                  <Button 
                    type="submit" 
                    className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-2 rounded-md transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Traitement en cours..." : "Confirmer la commande"}
                  </Button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 sticky top-20">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Récapitulatif de la commande</h2>

                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-md overflow-hidden mr-3">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">Qté: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium">
                        {(item.price * item.quantity).toLocaleString("fr-FR")} FCFA
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sous-total</span>
                    <span className="font-medium">{subtotal.toLocaleString("fr-FR")} FCFA</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Frais de livraison</span>
                    <span className="font-medium">{shippingCost.toLocaleString("fr-FR")} FCFA</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>{total.toLocaleString("fr-FR")} FCFA</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-md border border-amber-100">
                  <div className="flex items-center text-amber-800 mb-2">
                    <Truck className="h-4 w-4 mr-2" />
                    <span className="font-medium">Livraison estimée</span>
                  </div>
                  <p className="text-sm text-gray-600">Votre commande sera livrée sous 2-3 jours ouvrables.</p>
                </div>

                <div className="mt-6 text-xs text-center text-gray-500">
                  En passant votre commande, vous acceptez nos conditions générales de vente et notre politique de
                  confidentialité.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}